import React from 'react';

interface ITextSide {
  title: string;
  text: string;
}

const TextSide: React.FC<ITextSide> = ({ title, text }): JSX.Element => {
  const subPartTitle = title.split(' ');
  return (
    <div className='mxlg:w-full mxlg:py-5 flex h-full w-1/2 flex-col items-start justify-center px-[5%] text-left'>
      <h1 className='mxmd:text-[2.5rem] text-center text-[4rem] font-bold uppercase tracking-wide'>
        {subPartTitle[0]} <span className='text-pylon'>{subPartTitle[1]}</span>
      </h1>
      <p className='text-md'>{text}</p>
    </div>
  );
};
export default TextSide;
