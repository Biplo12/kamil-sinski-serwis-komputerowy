import React from 'react';
const Spinner: React.FC = (): JSX.Element => {
  return (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
