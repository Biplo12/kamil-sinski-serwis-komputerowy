import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { Fragment, useEffect } from 'react';

import useFetchUserById from '@/hooks/tanstack/Users/useFetchUserById';

import EditOrderDetails from '@/components/Dashboard/OrderDetails/Partials/EditOrderDetails';
import ImageSlider from '@/components/Dashboard/OrderDetails/Partials/ImageSlider';
import OrderInfoItem from '@/components/Dashboard/OrderDetails/Partials/OrderInfoItem';
import VerticalTimeLine from '@/components/Dashboard/OrderDetails/Partials/VerticalTimeLine';

import { useAppSelector } from '@/store/store-hooks';

import { IUser } from '@/interfaces';
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
  const orderDetails = order.orderDetails;
  const { data: userData } = useFetchUserById(
    orderDetails?.userId as string,
    true
  );
  const user = userData?.result as IUser;

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, setLoading]);

  const orderInfoItems = [
    {
      icon: <AttachMoneyRoundedIcon className='text-[1.2rem]' />,
      value: `${orderDetails?.price} zł`,
    },
    {
      icon: <AccountCircleRoundedIcon className='text-[1.2rem]' />,
      value: orderDetails?.userFullName,
    },
    {
      icon: <AlternateEmailRoundedIcon className='text-[1.2rem]' />,
      value: user?.email,
    },
    {
      icon: <PhoneAndroidRoundedIcon className='text-[1.2rem]' />,
      value: user?.phonenumber,
    },
  ];

  return (
    <div
      className={`'mb-5 gap-10' h-full w-full flex-col items-center justify-center ${
        loading ? 'hidden' : 'flex'
      }`}
    >
      <div className='border-pylon flex h-full w-full flex-col gap-10 rounded-lg border bg-gray-800 p-5 pb-16'>
        <div className='flex flex-wrap items-center justify-between gap-5'>
          <div className='flex flex-col gap-10'>
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
                    <OrderInfoItem icon={item.icon} value={item.value} />
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
          </div>
          <ImageSlider />
        </div>
      </div>
      <EditOrderDetails orderDetails={orderDetails} />
    </div>
  );
};
export default OrderInfo;
