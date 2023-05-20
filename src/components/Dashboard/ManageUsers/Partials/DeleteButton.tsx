import React from 'react';
import toast from 'react-hot-toast';

import useDeleteUser from '@/hooks/tanstack/Users/useDeleteUser';
import useFetchUsers from '@/hooks/tanstack/Users/useFetchUsers';

import Spinner from '@/components/Common/Spinner';

import { useAppDispatch } from '@/store/store-hooks';

import { setUsers } from '@/state/userSlice';

interface IDeleteButton {
  userId: number;
}

const DeleteButton: React.FC<IDeleteButton> = ({ userId }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { mutateAsync, isLoading } = useDeleteUser(userId);
  const { refetch } = useFetchUsers(false);

  const deleteUser = async () => {
    try {
      await mutateAsync();
      const { data } = await refetch();
      dispatch(setUsers(data.result));
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Error deleting user');
    }
  };

  return (
    <button
      onClick={() => deleteUser()}
      className='focus:shadow-outline flex max-h-[30px] min-w-[60px] items-center justify-center rounded-lg bg-red-600 px-3
    py-2 text-center font-bold
    text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : 'Delete'}
    </button>
  );
};
export default DeleteButton;
