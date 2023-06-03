import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { Fragment, useEffect } from 'react';
import toast from 'react-hot-toast';

import useFetchUserById from '@/hooks/tanstack/Users/useFetchUserById';

import RedirectButton from '@/components/Dashboard/Common/RedirectButton';
import DeleteOrderDetails from '@/components/Dashboard/OrderDetails/Partials/DeleteOrderDetails';
import EditOrderDetails from '@/components/Dashboard/OrderDetails/Partials/EditOrderDetails';
import OrderInfoItem from '@/components/Dashboard/OrderDetails/Partials/OrderInfoItem';
import VerticalTimeLine from '@/components/Dashboard/OrderDetails/Partials/VerticalTimeLine';

import { useAppSelector } from '@/store/store-hooks';

import { CustomError, IUser } from '@/interfaces';
import { selectOrder } from '@/state/orderSlice';

interface IOrderInfo {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const OrderInfo: React.FC<IOrderInfo> = ({
  setLoading,
  loading,
}): JSX.Element => {
  const order = useAppSelector(selectOrder);
  const orderDetails = order?.orderDetails;
  const userId = parseInt(orderDetails?.userId as string);
  const { data: userData, isError, error } = useFetchUserById(userId, true);

  const user = userData?.result as IUser;

  const userFullName =
    `${user?.firstname} ${user?.lastname}` === 'undefined undefined'
      ? 'N/A'
      : `${user?.firstname} ${user?.lastname}`;

  const isButtonDisabled =
    user?.email === undefined || user?.phonenumber === undefined;

  useEffect(() => {
    const err = error as CustomError;
    if (isError) {
      toast.error(err?.response?.data?.message || 'Something went wrong');
    }
  }, [error, isError]);

  useEffect(() => {
    if (user || isError) {
      setLoading(false);
    }
  }, [user, isError, setLoading]);

  const orderInfoItems = [
    {
      icon: <AttachMoneyRoundedIcon className='text-[1rem]' />,
      value: `${orderDetails?.price} zł`,
    },
    {
      icon: <AccountCircleRoundedIcon className='text-[1rem]' />,
      value: userFullName,
    },
    {
      icon: <AlternateEmailRoundedIcon className='text-[1rem]' />,
      value: user?.email,
    },
    {
      icon: <PhoneAndroidRoundedIcon className='text-[1rem]' />,
      value: user?.phonenumber,
    },
  ];

  return (
    <div
      className={`mb-5 h-full w-full flex-col items-center justify-center ${
        loading ? 'hidden' : 'flex'
      }`}
    >
      <div className='border-pylon mxxl:flex-col flex h-full w-full gap-10 rounded-lg border bg-gray-800 p-5'>
        <div className='mxxl:w-full flex w-1/2 items-start justify-between gap-5'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5'>
              <div>
                <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>
                  {orderDetails?.ordertitle}
                </h1>
                <span className='text-md font-semibold text-gray-400'>
                  {orderDetails?.orderdescription}
                </span>
              </div>
              <div className='flex flex-col gap-5'>
                {orderInfoItems.map((item, index) => (
                  <Fragment key={index}>
                    <OrderInfoItem
                      icon={item.icon}
                      value={item.value}
                      loading={loading}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>
                Status:
              </h1>
              <VerticalTimeLine orderDetails={orderDetails} />
            </div>
            <RedirectButton
              label='User details'
              path={`/admin/dashboard/manage-users/${userId}`}
              disabled={isButtonDisabled}
            />
            <DeleteOrderDetails orderId={orderDetails?.orderId as number} />
          </div>
          {/* <ImageSlider /> */}
        </div>
        <EditOrderDetails orderDetails={orderDetails} />
      </div>
    </div>
  );
};
export default OrderInfo;
