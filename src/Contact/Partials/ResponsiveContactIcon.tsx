import React from 'react';

interface IResponsiveContactIcon {
  icon: string;
  href: string;
}

const ResponsiveContactIcon: React.FC<IResponsiveContactIcon> = ({
  icon,
  href,
}): JSX.Element => {
  return (
    <div className='flex items-center justify-start gap-1'>
      <a
        className='text-l link link-underline link-underline-white cursor-pointer'
        href={href}
        target='_blank'
        rel='noreferrer'
      >
        <img src={`/svg/${icon}.png`} alt={`${icon} icon`} />
      </a>
    </div>
  );
};
export default ResponsiveContactIcon;
