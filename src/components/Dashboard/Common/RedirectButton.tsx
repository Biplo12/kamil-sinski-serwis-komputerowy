import { useRouter } from 'next/router';
import React from 'react';

interface IRedirectButton {
  label: string;
  path: string;
  disabled?: boolean;
}

const RedirectButton: React.FC<IRedirectButton> = ({
  label,
  path,
  disabled = false,
}): JSX.Element => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push(path);
  };
  return (
    <button
      onClick={handleRedirect}
      className='bg-pylon focus:shadow-outline flex max-h-[40px] min-w-[70px] items-center justify-center rounded-lg px-3
      py-2 text-center font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export default RedirectButton;
