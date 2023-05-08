import React from 'react';

interface ISelectStatusItem {
  label: string;
}

const SelectStatusItem: React.FC<ISelectStatusItem> = ({
  label,
}): JSX.Element => {
  return (
    <div className='flex w-full items-center rounded border border-gray-200 pl-4 dark:border-gray-700'>
      <input
        id='bordered-radio-1'
        type='radio'
        value=''
        name='bordered-radio'
        className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
      />
      <label
        htmlFor='bordered-radio-1'
        className='ml-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
    </div>
  );
};
export default SelectStatusItem;
