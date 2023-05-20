import React from 'react';
const UserNotFound: React.FC = (): JSX.Element => {
  return (
    <div className='flex h-[70vh] w-full items-center justify-center'>
      <span className='text-2xl font-semibold text-red-500'>
        User not found...
      </span>
    </div>
  );
};
export default UserNotFound;
