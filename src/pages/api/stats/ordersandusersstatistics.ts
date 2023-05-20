import { NextApiRequest, NextApiResponse } from 'next';

import validateMethod from '@/helpers/validateMethod';
import prisma from '@/utils/prisma';
const NUMBER_AFTER_COMMA = 2;

interface Order {
  createdAt: Date;
  status: string | null;
}

interface User {
  createdAt: Date;
}

const calculateOrdersLastPeriod = (orders: Order[], period: number): number => {
  const today = new Date();
  const lastPeriod = new Date(today.setDate(today.getDate() - period));
  return orders.filter((order) => {
    const orderDate = order.createdAt;
    return orderDate > lastPeriod;
  }).length;
};

const calculateUsersLastPeriod = (users: User[], period: number): number => {
  const today = new Date();
  const lastPeriod = new Date(today.setDate(today.getDate() - period));
  return users.filter((user) => {
    const userDate = user.createdAt;
    return userDate > lastPeriod;
  }).length;
};

const calculatePercentage = (value: number, total: number): string => {
  return ((value / total) * 100).toFixed(NUMBER_AFTER_COMMA);
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    validateMethod(req.method as string, 'GET');

    const orders = await prisma.orders.findMany();
    const users = await prisma.users.findMany();

    const totalOrders = orders.length;
    const totalUsers = users.length;

    const totalOrdersLastMonth = calculateOrdersLastPeriod(orders, 30);

    const totalOrdersLastWeek = calculateOrdersLastPeriod(orders, 7);

    const totalUsersLastMonth = calculateUsersLastPeriod(users, 30);

    const totalUsersLastWeek = calculateUsersLastPeriod(users, 7);

    const totalOrdersLastWeekPercentage = calculatePercentage(
      totalOrdersLastWeek,
      totalOrders
    );

    const totalOrdersLastMonthPercentage = calculatePercentage(
      totalOrdersLastMonth,
      totalOrders
    );

    const totalUsersLastWeekPercentage = calculatePercentage(
      totalUsersLastWeek,
      totalUsers
    );

    const totalUsersLastMonthPercentage = calculatePercentage(
      totalUsersLastMonth,
      totalUsers
    );

    const unactiveStatus = ['cancel', 'finished'];

    const activeOrders = orders.filter(
      (order) => !unactiveStatus.includes(order.status as string)
    ).length;

    const activeOrdersLastMonth = (activeOrders / totalOrdersLastMonth) * 100;
    const activeOrdersLastWeek = (activeOrders / totalOrdersLastWeek) * 100;

    const chartDataForEveryMonth = Array.from({ length: 12 }, (_, i) => {
      const month = new Date();
      month.setMonth(month.getMonth() - i);
      return {
        name: month.toLocaleString('eng', { month: 'short' }),
        Orders: orders.filter(
          ({ createdAt }) => new Date(createdAt).getMonth() === month.getMonth()
        ).length,
        Users: users.filter(
          ({ createdAt }) => new Date(createdAt).getMonth() === month.getMonth()
        ).length,
      };
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      result: {
        orders: {
          total: totalOrders,
          active: activeOrders,
          percentage: {
            total: {
              lastWeek: totalOrdersLastWeekPercentage,
              lastMonth: totalOrdersLastMonthPercentage,
            },
            active: {
              lastWeek: activeOrdersLastWeek,
              lastMonth: activeOrdersLastMonth,
            },
          },
        },
        users: {
          total: totalUsers,
          percentage: {
            lastWeek: totalUsersLastWeekPercentage,
            lastMonth: totalUsersLastMonthPercentage,
          },
        },
        charts: chartDataForEveryMonth.reverse(),
      },
    });
  } catch (err) {
    const typedError = err as Error;
    res.status(500).json({ statusCode: 500, message: typedError.message });
  }
};

export default handler;
