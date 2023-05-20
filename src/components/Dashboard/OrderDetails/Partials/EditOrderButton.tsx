import React, { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

import logger from '@/lib/logger';
import useChangeOrderStatus from '@/hooks/tanstack/Orders/useChangeOrderStatus';
import useEditOrder from '@/hooks/tanstack/Orders/useEditOrder';
import useFetchOrderById from '@/hooks/tanstack/Orders/useFetchOrderById';
import useFetchOrders from '@/hooks/tanstack/Orders/useFetchOrders';
import useDisabledOrderStatuses from '@/hooks/useDisabledOrderStatuses';

import Loading from '@/components/Common/Loading';

import { useAppDispatch } from '@/store/store-hooks';

import { CustomError, IOrderInputValues } from '@/interfaces';
import { IOrder } from '@/interfaces/IOrderSlice';
import { setOrder, setOrders } from '@/state/orderSlice';

interface IEditOrderButton {
  inputValues: IOrderInputValues;
  orderId: number | null | undefined;
  orderDetails: IOrder | null;
}

const EditOrderButton: React.FC<IEditOrderButton> = ({
  inputValues,
  orderId,
  orderDetails,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const disabledStatuses = useDisabledOrderStatuses(orderDetails?.status || '');
  const [disabled, setDisabled] = useState<boolean>(true);
  const { mutateAsync: editOrder, isLoading: isEditLoading } = useEditOrder(
    inputValues?.ordertitle,
    inputValues?.orderdescription,
    inputValues?.price,
    orderId
  );
  const { mutateAsync: changeStatus } = useChangeOrderStatus(
    inputValues.status,
    orderId
  );
  const { refetch: refetchOrders } = useFetchOrders(false);
  const { refetch: refetchOrder } = useFetchOrderById(orderId, false);

  const changedValues = useMemo(() => {
    return {
      ordertitle: inputValues?.ordertitle !== orderDetails?.ordertitle,
      orderdescription:
        inputValues?.orderdescription !== orderDetails?.orderdescription,
      price: inputValues?.price !== orderDetails?.price,
      status:
        inputValues?.status?.toLowerCase() !==
        orderDetails?.status?.toLowerCase(),
    };
  }, [
    inputValues?.ordertitle,
    inputValues?.orderdescription,
    inputValues?.price,
    inputValues?.status,
    orderDetails?.ordertitle,
    orderDetails?.orderdescription,
    orderDetails?.price,
    orderDetails?.status,
  ]);

  useEffect(() => {
    setDisabled(
      !(
        changedValues.ordertitle ||
        changedValues.orderdescription ||
        changedValues.price ||
        changedValues.status
      )
    );
  }, [changedValues]);

  const handleEditOrder = async () => {
    try {
      const { isError } = await editOrder();
      const { error: statusError, isError: statusIsError } =
        await changeStatus();

      if (statusIsError) {
        const err = statusError as CustomError;
        const errorMessage = err?.response?.data?.message;
        if (errorMessage && errorMessage.length > 100) {
          toast.error('Something went wrong');
        } else {
          toast.error(errorMessage as string);
        }
      }

      const { data } = await refetchOrders();
      const { data: orderData } = await refetchOrder();
      dispatch(setOrder(orderData?.result));
      dispatch(setOrders(data?.result));

      if (!isError && !statusError) {
        toast.success('Order edited');
      }
    } catch (err) {
      const typedError = err as Error;
      logger(typedError);
    }
  };

  return (
    <>
      <button
        className='from-pylon to-sea focus:shadow-outline mt-6 flex items-center justify-center rounded-lg bg-gradient-to-r px-10
        py-2 text-center font-bold
        text-white transition duration-300 ease-in-out hover:opacity-75 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        onClick={handleEditOrder}
        disabled={
          disabled ||
          isEditLoading ||
          disabledStatuses.includes(inputValues.status?.toLowerCase() as string)
        }
      >
        {isEditLoading ? <Loading /> : 'Edit order'}
      </button>
      {orderDetails?.status === 'cancelled' && (
        <p className='mt-5 text-sm text-red-500'>
          You can't edit this order because it's cancelled
        </p>
      )}
    </>
  );
};

export default EditOrderButton;
