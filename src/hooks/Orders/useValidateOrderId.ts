import { useEffect, useState } from 'react';

const useValidateOrderId = (orderId: string) => {
  const [isValidOrderId, setIsValidOrderId] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!orderId || orderId.length !== 6) {
      setTimeout(() => {
        setIsLoading(false);
      }, 100);
      setIsValidOrderId(false);
    } else {
      setIsValidOrderId(true);
      setIsLoading(false);
    }
  }, [orderId]);
  return { isValidOrderId, isLoading };
};

export default useValidateOrderId;
