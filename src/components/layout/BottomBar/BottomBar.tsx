import React from 'react';
const BottomBar: React.FC = (): JSX.Element => {
  return (
    <div className='border-sea mxxsm:w-[90%] mxxsm:flex-wrap mx-auto flex w-[75%] items-center justify-center border-t-2 pb-20 pt-10 text-center'>
      Kamil Siński&nbsp;
      <span className='text-pylon'>{new Date().getFullYear()} &copy;</span>
      &nbsp;All rights reserved.
    </div>
  );
};
export default BottomBar;
