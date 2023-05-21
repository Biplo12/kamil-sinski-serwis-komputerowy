import React from 'react';
const ImagesDrop: React.FC = (): JSX.Element => {
  return (
    <>
      <label
        htmlFor='message'
        className='mb-2 block text-sm font-medium text-white'
      >
        Images (Optional)
      </label>
      <div className='flex w-full items-center justify-center'>
        <label
          htmlFor='dropzone-file'
          className='hover:bg-bray-800 hover:bg-pylon hover:border-pylon flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-700 duration-150 ease-linear hover:bg-opacity-10'
        >
          <div className='flex flex-col items-center justify-center pb-6 pt-5'>
            <svg
              aria-hidden='true'
              className='mb-3 h-10 w-10 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
              />
            </svg>
            <p className='mb-2 text-center text-sm text-gray-400'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
            <p className='text-xs text-gray-400'>SVG, PNG, JPG or GIF</p>
          </div>
          <input id='dropzone-file' type='file' className='hidden' />
        </label>
      </div>
    </>
  );
};
export default ImagesDrop;
