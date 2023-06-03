import { useEffect, useState } from 'react';

const useValidateUserId = (userId: string) => {
  const [isValidUserId, setIsValidUserId] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!userId || userId.length !== 6) {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
      setIsValidUserId(false);
    } else {
      setIsValidUserId(true);
      setIsLoading(false);
    }
  }, [userId]);

  return { isValidUserId, isLoading };
};

export default useValidateUserId;
