import React, { useState } from 'react';

import FormButton from '@/components/Common/FormButton';
const Auth: React.FC = (): JSX.Element => {
  const focusInitial = {
    email: false,
    password: false,
  };
  const credentialsInitial = {
    email: '',
    password: '',
  };
  const [focus, setFocus] = useState(focusInitial);
  const [credentials, setCredentials] = useState(credentialsInitial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className='bg-black-stalion flex h-screen w-full flex-col items-center justify-center'>
      <div className='bg-pylon flex h-[700px] w-[500px] flex-col items-center justify-center gap-3 rounded-md bg-opacity-30 shadow-lg'>
        <div className='flex h-1/2 w-full items-center justify-center'>
          <img
            src='/images/big-logo.png'
            alt='big logo'
            className='h-[300px] w-[300px] object-contain'
          />
        </div>
        <div className='flex h-1/2 w-full flex-col items-center justify-start gap-12'>
          <div className='relative mx-auto flex w-[70%] flex-col'>
            <label
              className={`ease absolute text-[0.9rem] duration-300 ${
                focus.email
                  ? 'text-pylon -mt-5 text-[1rem]'
                  : '-mt-4 text-white'
              }`}
            >
              Email
            </label>
            <input
              type='email'
              className='input focus:border-pylon ease duration-300 focus:ring-0'
              onChange={(e) => handleChange(e)}
              value={credentials.email}
              name='email'
              onFocus={() =>
                setFocus({
                  email: true,
                  password: false,
                })
              }
              onBlur={() => setFocus(focusInitial)}
            />
          </div>
          <div className='relative mx-auto flex w-[70%] flex-col'>
            <label
              className={`ease absolute text-[0.9rem] duration-300 ${
                focus.password
                  ? 'text-pylon -mt-5 text-[1rem]'
                  : '-mt-4 text-white'
              }`}
            >
              Password
            </label>
            <input
              type='password'
              className='input focus:border-pylon ease duration-300 focus:ring-0'
              onChange={(e) => handleChange(e)}
              name='password'
              value={credentials.password}
              onFocus={() =>
                setFocus({
                  email: false,
                  password: true,
                })
              }
              onBlur={() => setFocus(focusInitial)}
            />
          </div>
          <FormButton text='Zaloguj' handler={() => console.log('login')} />
        </div>
      </div>
    </div>
  );
};
export default Auth;
