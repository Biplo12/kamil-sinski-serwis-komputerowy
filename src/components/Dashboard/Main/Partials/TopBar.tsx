import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import React from 'react';

import SearchInput from '@/components/Dashboard/Main/Partials/SearchInput';

const TopBar: React.FC = (): JSX.Element => {
  return (
    <div className='exsm:flex-col my-4 flex w-full items-center justify-between gap-3'>
      <SearchInput />
      <button className='bg-pylon exsm:w-full exsm:justify-center exsm:gap-2 relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
        <FileDownloadRoundedIcon />
        <h2 className='exsm:flex hidden'>Download</h2>
      </button>
      <div className='bg-sea exsm:w-full exsm:justify-center exsm:gap-2 relative inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'>
        <HomeOutlinedIcon />
        <h2 className='exsm:flex hidden'>Dashboard</h2>
      </div>
    </div>
  );
};
export default TopBar;
