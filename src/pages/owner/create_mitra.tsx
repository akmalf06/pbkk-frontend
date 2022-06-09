import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';

import axiosClient from '@/lib/axios';

import ComboboxComp from '@/components/forms/ComboboxComp';
import PasswordInput from '@/components/forms/PasswordInput';

import Admin from '@/layouts/Admin.js';

const inventories = [
  {
    id: 1,
    name: 'Gudang Surabaya',
  },
  {
    id: 2,
    name: 'Gudang Malang',
  },
  {
    id: 3,
    name: 'Gudang Ngawi',
  },
  {
    id: 4,
    name: 'Gudang Madiun',
  },
];

const Create_mitra = () => {
  const { data: inventories, error: inventoriesError } = useSWR(
    '/product/categories'
  );
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);
  const [register, setRegister] = useState({
    name: '',
    address: '',
    phone: '',
    username: '',
    password: '',
    email: '',
    inventory_id: '',
  });

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.target.value === register.password
      ? setPasswordConfirmed(true)
      : setPasswordConfirmed(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const submitForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', register.name);
    formData.append('address', register.address);
    formData.append('phone', register.phone);
    formData.append('username', register.username);
    formData.append('password', register.password);
    formData.append('email', register.email);
    formData.append('inventory_id', register.inventory_id);

    toast.promise(axiosClient.post('/create_mitra', formData), {
      loading: 'Loading',
      success: 'Berhasil melakukan pendaftaran mitra',
      error: 'Gagal mendaftar',
    });
  };

  if (inventoriesError) return <>Error loading page</>;
  if (!inventories) return <>Loading page...</>;

  return (
    <Admin>
      <Toaster />
      <div className='flex min-h-screen py-8'>
        <form
          onSubmit={submitForm}
          className='flex w-full flex-col space-y-6 pb-32 font-medium'
        >
          <h2 className=' text-2xl font-bold'>Daftar Akun Mitra Bisnis</h2>
          <p>
            Lengkapi data-data berikut sebagai syarat menjadi mitra bisnis anda.
            Konfirmasi setelah semua data terisi dengan benar!
          </p>
          <div className=''>
            <p>Nama Mitra</p>
            <input
              onChange={handleChange}
              type='text'
              required
              name='name'
              className='mt-1 h-10 w-full rounded-md border bg-gray-200 p-3 '
            />
          </div>
          <div className=''>
            <p>Alamat Mitra</p>
            <input
              onChange={handleChange}
              type='text'
              required
              name='address'
              className='mt-1 h-10 w-full rounded-md border bg-gray-200 p-3 '
            />
          </div>
          <div className=''>
            <p>Nomor Telepon Mitra</p>
            <input
              onChange={handleChange}
              type='text'
              inputMode='numeric'
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                (e.target.value = e.target.value
                  .replace(/[^0-9]/g, '')
                  .slice(0, 13))
              }
              required
              name='phone'
              id='phone'
              className='mt-1 h-10 w-full rounded-md border bg-gray-200 p-3'
            />
          </div>
          <div className=''>
            <p>Username Mitra</p>
            <input
              onChange={handleChange}
              type='text'
              required
              name='username'
              className='mt-1 h-10 w-full rounded-md border bg-gray-200 p-3 '
            />
          </div>
          <div className=''>
            <p>Kata Sandi Mitra</p>
            <PasswordInput
              handleChange={handleChange}
              id='password'
              name='password'
              required
              className=''
            />
          </div>
          <div className=''>
            <p>Ulangi Kata Sandi Mitra</p>
            <PasswordInput
              handleChange={handleConfirmPasswordChange}
              id='password_confirm'
              name='password_confirm'
              required
              className={`border ${
                register.password == '' ? 'border-0' : ''
              }  ${passwordConfirmed ? 'border-green-500' : 'border-red-500'}
              col-span-2 mt-1 h-10 rounded-md border bg-gray-200 p-3  `}
            />
          </div>
          <div className=''>
            <p>Email Mitra</p>
            <input
              onChange={handleChange}
              type='email'
              required
              name='emaik'
              className='mt-1 h-10 w-full rounded-md border bg-gray-200 p-3'
            />
          </div>
          <div className=''>
            <p>Email Mitra</p>
            <input
              onChange={handleChange}
              type='email'
              required
              name='emaik'
              className='mt-1 h-10 w-full rounded-md border bg-gray-200 p-3'
            />
          </div>
          <div className=''>
            <p>Pilih Gudang</p>
            <ComboboxComp
              items={inventories.data}
              name='inventory_id'
              handleChange={handleChange}
            />
          </div>
          <button
            type='submit'
            {...(passwordConfirmed ? { disabled: false } : { disabled: true })}
            className='btn-main mx-auto w-fit rounded-md bg-blue-600 px-16 py-2 text-white disabled:bg-slate-500 sm:mx-0 '
          >
            Konfirmasi
          </button>
        </form>
      </div>
    </Admin>
  );
};

export default Create_mitra;
