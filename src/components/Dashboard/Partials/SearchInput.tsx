import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react';
const SearchInput: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <SearchRoundedIcon className='h-5 w-5 text-gray-400' />
        </div>
        <input
          type='text'
          id='input-group-1'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Search'
        />
      </div>
    </>
  );
};
export default SearchInput;
