export interface IOrder {
  id: string;
  orderId: number;
  status: string;
  price: number;
  userFullName: string;
  ordertitle: string;
  orderdescription: string;
  statusMessage: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  repairingAt: string;
  repairedAt: string;
}

export default interface IOrderSlice {
  orderDetails: IOrder | null;
  orders: IOrder[] | null;
  ordersStatistics: {
    orders: {
      total: 0 | null;
      active: 0 | null;
      percentage: {
        total: {
          lastWeek: 0 | null;
          lastMonth: 0 | null;
        };
        active: {
          lastWeek: 0 | null;
          lastMonth: 0 | null;
        };
      };
    };
    users: {
      total: 0 | null;
      percentage: {
        lastWeek: 0 | null;
        lastMonth: 0 | null;
      };
    };
    charts: [] | null;
  };
}
