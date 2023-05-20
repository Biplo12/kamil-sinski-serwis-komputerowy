import React from 'react';
import { format, register } from 'timeago.js';

import pl_PL from './pl';
interface IOrderDetails {
  id: string;
  status: string;
  statusMessage: string;
  createdAt: string;
  updatedAt: string;
  repairedAt?: string;
  repairingAt?: string;
  diagnosingAt?: string;
  cancelledAt?: string;
  completedAt?: string;
}

interface IOrder {
  order: IOrderDetails | null;
}

const OrderStatusTimeline: React.FC<IOrder> = ({ order }): JSX.Element => {
  const orderStatus = order?.status;

  register('pl_PL', pl_PL);

  return (
    <ol className='mxlg:flex-col mxlg:gap-5 flex w-full'>
      <li className='mxlg:w-[90%] mxlg:mx-auto relative w-[350px]'>
        <div className='flex items-center justify-center gap-3'>
          <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full dark:bg-blue-900'>
            <img src='/svg/glass-active.svg' alt='wrench icon' />
          </div>
          <div className='bg-pylon h-0.5 w-full' />
        </div>
        <div className='mt-3 flex flex-col gap-3 sm:pr-8'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Diagnostyka
          </h3>
          <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {order?.createdAt && format(order?.createdAt, 'pl_PL')}
          </time>
        </div>
      </li>
      <li className='mxlg:w-[90%] mxlg:mx-auto relative ml-3 w-[350px]'>
        <div className='flex items-center justify-center gap-2'>
          <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full dark:bg-blue-900'>
            <img
              src={`/svg/wrench${
                orderStatus === 'repairing' ||
                orderStatus === 'repaired' ||
                orderStatus === 'completed'
                  ? '-active'
                  : ''
              }.svg`}
              alt='wrench icon'
            />
          </div>
          <div
            className={`h-0.5 w-full ${
              orderStatus === 'repairing' ||
              orderStatus === 'repaired' ||
              orderStatus === 'completed'
                ? 'bg-pylon'
                : 'bg-gray-700'
            }`}
          />
        </div>
        <div className='mt-3 flex flex-col gap-2 sm:pr-8'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Naprawa
          </h3>
          <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {orderStatus === 'repairing' ||
            orderStatus === 'repaired' ||
            orderStatus === 'completed'
              ? order?.repairingAt && format(order?.repairingAt, 'pl_PL')
              : '---'}
          </time>
        </div>
      </li>
      <li className='mxlg:w-[90%] mxlg:mx-auto relative ml-3 w-[350px]'>
        <div className='flex items-center justify-center gap-3'>
          <div className='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
            <img
              src={`/svg/checked${
                orderStatus === 'repaired' || orderStatus === 'completed'
                  ? '-active'
                  : ''
              }.svg`}
              alt='wrench icon'
            />
          </div>
          <div
            className={`h-0.5 w-full ${
              orderStatus === 'repaired' || orderStatus === 'completed'
                ? 'bg-pylon'
                : 'bg-gray-700'
            }`}
          />
        </div>
        <div className='mt-3 flex flex-col gap-2 sm:pr-8'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Naprawa zakończona
          </h3>
          <time className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {orderStatus === 'repaired' || orderStatus === 'completed'
              ? order?.repairedAt && format(order?.repairedAt, 'pl_PL')
              : '---'}
          </time>
        </div>
      </li>
    </ol>
  );
};
export default OrderStatusTimeline;
