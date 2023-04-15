import React from 'react';

interface IContactInput {
  label: string;
  id: string;
}

const ContactInput: React.FC<IContactInput> = ({ label, id }): JSX.Element => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        style={{ border: 'none' }}
        className='border-b border-white bg-transparent text-black outline-none'
        id={id}
        name={id}
      />
    </div>
  );
};
export default ContactInput;
