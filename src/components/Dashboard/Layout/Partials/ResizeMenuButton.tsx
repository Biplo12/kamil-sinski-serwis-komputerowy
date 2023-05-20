import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import React from 'react';

interface IResizeMenuButton {
  handleOpen: () => void;
  open: boolean;
}

const ResizeMenuButton: React.FC<IResizeMenuButton> = ({
  handleOpen,
  open,
}): JSX.Element => {
  return (
    <div className='absolute -right-12 top-32 flex -translate-x-8 items-center justify-center'>
      <button
        className='from-pylon to-sea flex h-8 w-8 items-center justify-start rounded-full bg-gradient-to-r px-1'
        onClick={handleOpen}
      >
        {!open ? <ChevronRightRoundedIcon /> : <ChevronLeftRoundedIcon />}
      </button>
    </div>
  );
};
export default ResizeMenuButton;
