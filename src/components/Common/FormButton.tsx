import React from 'react';

interface IFormButton {
  text: string | JSX.Element;
  handler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const FormButton: React.FC<IFormButton> = ({
  text,
  handler,
  disabled,
}): JSX.Element => {
  return (
    <button
      onClick={handler}
      className='bg-pylon focus:shadow-outline mt-3 flex min-w-[175px] items-center justify-center rounded-lg px-4
      py-2 text-center font-bold text-white
      transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default FormButton;
