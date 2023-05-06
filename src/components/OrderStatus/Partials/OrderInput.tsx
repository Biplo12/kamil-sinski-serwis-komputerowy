import React, { useState } from 'react';

interface IOrderInput {
  setOrderInput: React.Dispatch<React.SetStateAction<string>>;
  orderInput: string;
  loading: boolean;
}

const OrderInput: React.FC<IOrderInput> = ({
  setOrderInput,
  orderInput,
  loading,
}): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOrderInput(value);
  };

  return (
    <div className='relative mt-3 flex w-full flex-col'>
      <label
        className={`ease absolute text-[0.9rem] duration-300 ${
          focus ? 'text-pylon -mt-5 text-[1rem]' : '-mt-4 text-white'
        }`}
      >
        Identyfikator zlecenia
      </label>
      <input
        type='text'
        className='input focus:border-pylon ease duration-300 focus:ring-0'
        onChange={(e) => handleChange(e)}
        value={orderInput}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        maxLength={6}
        disabled={loading}
      />
    </div>
  );
};
export default OrderInput;
