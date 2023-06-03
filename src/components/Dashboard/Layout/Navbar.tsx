import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = (): JSX.Element => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className='fixed top-0 z-50 w-full border-b border-gray-200 bg-white px-4 dark:border-gray-700 dark:bg-gray-800'>
      <div className='flex items-center justify-between px-3 py-4'>
        <div className='flex items-center justify-center gap-10'>
          <Link href='/admin/dashboard'>
            <img
              src='/images/small-logo-blue.png'
              className='h-auto w-36 object-contain'
              alt='Kamil Siński Logo'
            />
          </Link>
        </div>
        <button
          type='button'
          className='flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
          aria-expanded='false'
          data-dropdown-toggle='dropdown-user'
          onClick={handleSignOut}
        >
          <img
            className='h-8 w-8 rounded-full'
            src='/images/user-mockup.png'
            alt='user photo'
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
