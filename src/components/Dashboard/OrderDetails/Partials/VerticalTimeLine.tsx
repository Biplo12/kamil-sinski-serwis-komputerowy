import React, { Fragment } from 'react';
import { format } from 'timeago.js';

import TimelineItem from '@/components/Dashboard/OrderDetails/Partials/TimelineItem';

import { IOrder } from '@/interfaces/IOrderSlice';

interface IVerticalTimeLine {
  orderDetails: IOrder | null;
}

const VerticalTimeLine: React.FC<IVerticalTimeLine> = ({
  orderDetails,
}): JSX.Element => {
  const timelineItems = [
    {
      icon: 'glass',
      timestamp: orderDetails?.createdAt as string,
      label: 'Diagnoing',
    },
    {
      icon: 'wrench',
      timestamp: orderDetails?.repairingAt as string,
      label: 'Repairing',
    },
    {
      icon: 'checked',
      timestamp: orderDetails?.repairedAt as string,
      label: 'Repaired',
    },
  ];
  return (
    <ol className='relative ml-[0.5rem] border-l border-gray-700'>
      {timelineItems.map((item, index) => (
        <Fragment key={index}>
          <TimelineItem
            icon={item.icon}
            timestamp={
              item.timestamp === 'N/A' ? 'N/A' : format(item.timestamp)
            }
            label={item.label}
          />
        </Fragment>
      ))}
    </ol>
  );
};
export default VerticalTimeLine;
