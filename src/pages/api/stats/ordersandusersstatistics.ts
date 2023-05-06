import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/prisma';
import validateMethod from '@/utils/validateMethod';

const NUMBER_AFTER_COMMA = 2;

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

    const totalOrdersLastMonth = orders.filter((order) => {
      const today = new Date();
      const orderDate = new Date(order.createdAt);
      const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
      return orderDate > lastMonth;
    }).length;

    const totalOrdersLastWeek = orders.filter((order) => {
      const today = new Date();
      const orderDate = new Date(order.createdAt);
      const lastWeek = new Date(today.setDate(today.getDate() - 7));
      return orderDate > lastWeek;
    }).length;

    const totalUsersLastMonth = users.filter((user) => {
      const today = new Date();
      const userDate = new Date(user.createdAt);
      const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
      return userDate > lastMonth;
    }).length;

    const totalUsersLastWeek = users.filter((user) => {
      const today = new Date();
      const userDate = new Date(user.createdAt);
      const lastWeek = new Date(today.setDate(today.getDate() - 7));
      return userDate > lastWeek;
    }).length;

    const totalOrdersLastWeekPercentage =
      (totalOrdersLastWeek / totalOrders) * 100;
    const totalOrdersLastMonthPercentage =
      (totalOrdersLastMonth / totalOrders) * 100;

    const totalUsersLastWeekPercentage =
      (totalUsersLastWeek / totalUsers) * 100;
    const totalUsersLastMonthPercentage =
      (totalUsersLastMonth / totalUsers) * 100;

    const unactiveStatus = ['cancel', 'finished'];

    const activeOrders = orders.filter(
      (order) => !unactiveStatus.includes(order.status)
    ).length;

    const activeOrdersLastMonth = (activeOrders / totalOrdersLastMonth) * 100;
    const activeOrdersLastWeek = (activeOrders / totalOrdersLastWeek) * 100;

    const chartDataForEveryMonth = [];

    for (let i = 0; i < 12; i++) {
      const month = new Date();
      month.setMonth(month.getMonth() - i);
      const monthOrders = orders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return orderDate.getMonth() === month.getMonth();
      }).length;
      const monthUsers = users.filter((user) => {
        const userDate = new Date(user.createdAt);
        return userDate.getMonth() === month.getMonth();
      }).length;
      chartDataForEveryMonth.push({
        name: month.toLocaleString('eng', { month: 'short' }),
        Orders: monthOrders,
        Users: monthUsers,
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: 'Success',
      result: {
        orders: {
          total: totalOrders,
          active: activeOrders,
          percentage: {
            total: {
              lastWeek:
                totalOrdersLastWeekPercentage.toFixed(NUMBER_AFTER_COMMA),
              lastMonth:
                totalOrdersLastMonthPercentage.toFixed(NUMBER_AFTER_COMMA),
            },
            active: {
              lastWeek: activeOrdersLastWeek.toFixed(NUMBER_AFTER_COMMA),
              lastMonth: activeOrdersLastMonth.toFixed(NUMBER_AFTER_COMMA),
            },
          },
        },
        users: {
          total: totalUsers,
          percentage: {
            lastWeek: totalUsersLastWeekPercentage.toFixed(NUMBER_AFTER_COMMA),
            lastMonth:
              totalUsersLastMonthPercentage.toFixed(NUMBER_AFTER_COMMA),
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
