import React from 'react';

import Spinner from '@/components/Common/Spinner';
const Loading: React.FC = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Spinner />
      <p>Loading...</p>
    </div>
  );
};
export default Loading;
