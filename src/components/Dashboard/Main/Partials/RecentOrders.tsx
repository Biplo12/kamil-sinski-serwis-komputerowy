import React, { Fragment } from 'react';

import RecentOrder from '@/components/Dashboard/Main/Partials/RecentOrder';
import ResponsiveRecentOrder from '@/components/Dashboard/Main/Partials/ResponsiveRecentOrder';

const RecentOrders: React.FC = (): JSX.Element => {
  const recentOrdersData = [
    {
      id: '231nasdsao21',
      name: 'John Doe',
      date: '12/12/2021',
    },
    {
      id: 'dsauy231xzcz',
      name: 'John Doe',
      date: '12/12/2021',
    },
    {
      id: 'xcnsu231czxz',
      name: 'John Doe',
      date: '12/12/2021',
    },
    {
      id: 'lodjm87600sa',
      name: 'John Doe',
      date: '12/12/2021',
    },
  ];
  return (
    <>
      <h1 className='border-b border-gray-900 px-4 py-5 text-xl font-bold text-white'>
        Recent Orders
      </h1>
      <div className='flex w-full flex-col'>
        {recentOrdersData.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className='mxslg:hidden block'>
                <RecentOrder name={item.name} date={item.date} id={item.id} />
              </div>
              <div className='mxslg:block hidden'>
                <ResponsiveRecentOrder
                  name={item.name}
                  date={item.date}
                  id={item.id}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};
export default RecentOrders;
