import { useEffect } from 'react';

import useFetchStatistics from '@/hooks/tanstack/useFetchStatistics';

import { useAppDispatch } from '@/store/store-hooks';

import { setStats } from '@/state/statsSlice';

const useSaveStats = () => {
  const dispatch = useAppDispatch();

  const { data: statsData } = useFetchStatistics(true);

  useEffect(() => {
    if (!statsData) return;
    dispatch(setStats(statsData?.result));
  }, [statsData, dispatch]);
};

export default useSaveStats;
