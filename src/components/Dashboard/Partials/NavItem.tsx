import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface INavItem {
  label: string;
  icon: JSX.Element;
  to: string;
}

const NavItem: React.FC<INavItem> = ({ label, icon, to }): JSX.Element => {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <li>
      <Link
        href={to}
        className={`flex items-center rounded-lg p-2 text-white hover:bg-gray-700 ${
          isActive ? 'bg-gray-700' : ''
        }`}
      >
        <svg
          aria-hidden='true'
          className='group-hover: h-6 w-6 text-gray-400 transition duration-75 group-hover:text-white'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          {icon}
        </svg>
        <span className='ml-3'>{label}</span>
      </Link>
    </li>
  );
};
export default NavItem;
