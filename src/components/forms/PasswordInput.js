import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useState } from 'react';

function PasswordInput({ handleChange, name, className, id, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className='relative mt-1'>
      <input
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        name={name}
        id={id}
        {...rest}
        className={`col-span-2 mt-1 h-10 w-full rounded-md bg-gray-200 p-3 ${className}`}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          togglePassword();
        }}
        type='button'
        className='absolute inset-y-0 right-0 mr-3 flex items-center rounded-lg p-1'
      >
        {showPassword ? (
          <EyeIcon className='h-5 w-5' aria-hidden='true' />
        ) : (
          <EyeOffIcon className='h-5 w-5' aria-hidden='true' />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
