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
  completedAt: string;
  cancelledAt: string;
  diagnosingAt: string;
}

export default interface IOrderSlice {
  orderDetails: IOrder | null;
  orders: IOrder[] | null;
}
