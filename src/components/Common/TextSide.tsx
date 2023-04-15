import React from 'react';

interface ITextSide {
  title: string;
  text: string;
}

const TextSide: React.FC<ITextSide> = ({ title, text }): JSX.Element => {
  const subPartTitle = title.split(' ');
  return (
    <div className='mxlg:w-full mxlg:py-5 mxsm:items-center flex h-full w-1/2 flex-col items-start justify-center gap-3 px-[5%] text-left'>
      <h1 className='mxsm:text-[2.5rem] text-center text-[4rem] font-light uppercase tracking-wide'>
        {subPartTitle[0]}{' '}
        <span className='text-pylon font-bold'>{subPartTitle[1]}</span>
      </h1>
      <p className='text-md mxsm:text-center'>{text}</p>
    </div>
  );
};
export default TextSide;
