import React from 'react';
const BottomBar: React.FC = (): JSX.Element => {
  return (
    <div className='border-sea mx-auto flex w-[65%] items-center justify-center border-t-2 pb-20 pt-10 text-center'>
      Kamil Siński&nbsp;
      <span className='text-pylon'>{new Date().getFullYear()} &copy;</span>
      &nbsp;All rights reserved.
    </div>
  );
};
export default BottomBar;
