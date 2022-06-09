import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

type userDataType = {
  name?: string;
  role?: string;
  token?: string | null;
};

type userDatasType = {
  data: userDataType;
};

type props = {
  children: React.ReactNode;
};

interface UserContextInterface {
  userData: userDataType;
  login: (user: userDataType) => void;
  logout: () => void;
  isAuthenticated: () => boolean | undefined;
  isLoading: boolean;
  isRoleAble: (role: string) => boolean;
}

const AuthContext = React.createContext<UserContextInterface | null>(null);

function AuthProvider({ children }: props) {
  const [user, setUser] = useState<userDataType>({});
  const {
    data: userData,
    error: userDataError,
    mutate,
  } = useSWR(user?.token ? '/auth/me' : null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const enumRole: { [key: string]: Array<string> } = {
    user: ['mitra', 'cart', 'order-list'],
    admin: ['admin'],
  };

  const getUserToken = () => {
    return {
      token: localStorage.getItem('token'),
    };
  };

  useEffect(() => {
    setUser(getUserToken());
  }, []);

  useEffect(() => {
    if (user && userData) {
      setIsLoading(false);
    }
  }, [user, userData]);

  const logout = () => {
    localStorage.removeItem('token');
    setUser({});
    mutate();
    router.push('/');
  };

  const login = (user: userDataType) => {
    localStorage.setItem('token', user.token as string);
    mutate();
    setUser({
      token: user.token,
    });
  };

  const isAuthenticated = () => {
    if (!isLoading) {
      return userData?.data.name ? true : false;
    }
  };

  const isRoleAble = (role: string) => {
    for (const pathEnum of enumRole[role]) {
      if (router.pathname.includes(pathEnum)) {
        return true;
      }
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        login,
        logout,
        isAuthenticated,
        isLoading,
        isRoleAble,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
