import { useEffect } from 'react';

import useFetchUsers from '@/hooks/tanstack/Users/useFetchUsers';

import { useAppDispatch, useAppSelector } from '@/store/store-hooks';

import { selectUser, setUsers } from '@/state/userSlice';

const useSaveUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);
  const { refetch } = useFetchUsers(false);

  useEffect(() => {
    const fetchData = async () => {
      if (users.users && users.users.length > 0) return;
      const { data } = await refetch();
      if (!data) return;
      dispatch(setUsers(data?.result));
    };
    fetchData();
  }, [users.users, refetch, dispatch]);
};

export default useSaveUsers;
