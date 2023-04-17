import React from 'react';

interface IContactIcon {
  icon: string;
  content: string;
  href?: string;
}

const ContactIcon: React.FC<IContactIcon> = ({
  icon,
  content,
  href,
}): JSX.Element => {
  return (
    <div className='flex items-center justify-start gap-1'>
      <img src={`/svg/${icon}.png`} alt={`${icon} icon`} />
      <a
        className='text-l link link-underline link-underline-white cursor-pointer'
        href={href}
        target='_blank'
        rel='noreferrer'
      >
        {content}
      </a>
    </div>
  );
};
export default ContactIcon;
