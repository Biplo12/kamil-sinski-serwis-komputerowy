import { useRouter } from 'next/router';
import React from 'react';

interface IUserDetailsButton {
  userId: number;
}

const UserDetailsButton: React.FC<IUserDetailsButton> = ({
  userId,
}): JSX.Element => {
  const router = useRouter();

  const redirectToUserDetails = () => {
    router.push(`/admin/dashboard/manage-users/${userId}`);
  };

  return (
    <button
      type='button'
      className='from-pylon to-sea focus:shadow-outline flex min-w-[175px] max-w-[100px] items-center justify-center rounded-lg bg-gradient-to-r
      px-2 py-[0.35rem] text-center font-bold
      text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      onClick={redirectToUserDetails}
    >
      User details
    </button>
  );
};

export default UserDetailsButton;
