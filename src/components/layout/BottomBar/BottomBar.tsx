import React from 'react';
const BottomBar: React.FC = (): JSX.Element => {
  return (
    <div className='border-sea mx-auto flex w-[65%] items-center justify-center border-t-2 pb-20 pt-10'>
      Kamil Siński {new Date().getFullYear()} &copy; All rights reserved.
    </div>
  );
};
export default BottomBar;
