import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import { Fragment } from 'react';

import useFetchUserById from '@/hooks/tanstack/useFetchUserById';

import ImageSlider from '@/components/Dashboard/OrderDetails/Partials/ImageSlider';
import OrderInfoItem from '@/components/Dashboard/OrderDetails/Partials/OrderInfoItem';
import OrderStatusRoadmap from '@/components/OrderStatusDetails/Partials/OrderStatusRoadmap';

import { IUser } from '@/interfaces';
import { IOrder } from '@/interfaces/IOrderSlice';

interface IOrderInfo {
  order: IOrder;
}

const OrderInfo: React.FC<IOrderInfo> = ({ order }): JSX.Element => {
  const { data: userData } = useFetchUserById(order?.userId as string, true);
  const user = userData?.result as IUser;

  const orderInfoItems = [
    {
      icon: <AttachMoneyRoundedIcon className='text-[1.2rem]' />,
      value: `${order?.price} zł`,
    },
    {
      icon: <AccountCircleRoundedIcon className='text-[1.2rem]' />,
      value: order?.userFullName,
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
    <div className='flex h-auto min-h-[60vh] w-full flex-col items-center justify-center gap-10'>
      <div className='flex h-full w-full items-start justify-between gap-5'>
        <div className='flex h-full w-full flex-col items-start justify-start gap-10'>
          <div className='flex h-auto min-h-[500px] w-full flex-col gap-10 rounded-lg bg-gray-800 p-5'>
            <div className='flex items-center justify-between gap-5'>
              <div className='flex flex-col gap-10'>
                <div>
                  <h1 className='text-3xl font-semibold text-gray-800 dark:text-gray-100'>
                    {order?.ordertitle}
                  </h1>
                  <span className='text-md font-semibold text-gray-400'>
                    {order?.orderdescription}
                  </span>
                </div>
                <div className='flex flex-col gap-5'>
                  {orderInfoItems.map((item, index) => (
                    <Fragment key={index}>
                      <OrderInfoItem icon={item.icon} value={item.value} />
                    </Fragment>
                  ))}
                </div>
                <OrderStatusRoadmap order={order} />
              </div>
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderInfo;
