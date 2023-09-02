import bcrypt from 'bcryptjs';
import React from 'react';
const FormSubmitButton: React.FC = (): JSX.Element => {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    await bcrypt.hash('password', 12);
  };

  return (
    <button
      type='submit'
      className='bg-sea focus:shadow-outline mt-3 flex min-w-[175px] items-center justify-center rounded-lg px-4 py-2 text-center font-bold text-white transition duration-300 ease-in-out hover:opacity-90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      onClick={(e) => handleSubmit(e)}
    >
      Sign In
    </button>
  );
};
export default FormSubmitButton;
