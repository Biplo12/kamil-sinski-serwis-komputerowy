interface IOrder {
  id: string;
  email: string;
  status: string;
  message: string;
  statusMessage: string;
  createdAt: string;
  updatedAt: string;
}

export default interface IOrderSlice {
  order: IOrder[];
}
