import toast from 'react-hot-toast';

import useDeleteUser from '@/hooks/tanstack/Users/useDeleteUser';
import useFetchUsers from '@/hooks/tanstack/Users/useFetchUsers';

import { useAppDispatch } from '@/store/store-hooks';

import { setUsers } from '@/state/userSlice';

const useDeleteUserCall = (userId: number) => {
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

  return { deleteUser, isLoading };
};

export default useDeleteUserCall;
