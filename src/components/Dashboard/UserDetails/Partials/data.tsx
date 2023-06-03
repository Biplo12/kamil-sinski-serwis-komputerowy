import { GridColDef } from '@material-ui/data-grid';

import useFetchUserOrders from '@/hooks/tanstack/Users/useFetchUserOrders';

import DetailsButton from '@/components/Dashboard/Common/DetailsButton';
import DeleteButton from '@/components/Dashboard/ManageOrders/Partials/DeleteButton';

import { useAppSelector } from '@/store/store-hooks';

import { IOrder } from '@/interfaces/IOrderSlice';
import { selectUser } from '@/state/userSlice';
const columns: GridColDef[] = [
  { field: 'orderId', headerName: 'ID', width: 100 },
  { field: 'ordertitle', headerName: 'Title', width: 300 },
  { field: 'orderdescription', headerName: 'Description', width: 300 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'price', headerName: 'Price', width: 120 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
  { field: 'updatedAt', headerName: 'Updated At', width: 200 },
  { field: 'diagnosingAt', headerName: 'Diagnosing At', width: 200 },
  { field: 'repairingAt', headerName: 'Repairing At', width: 200 },
  { field: 'repairedAt', headerName: 'Repaired At', width: 200 },
  { field: 'completedAt', headerName: 'Completed At', width: 200 },
  { field: 'cancelledAt', headerName: 'cancelled At', width: 200 },
  {
    field: ' ',
    headerName: '',
    width: 80,
    renderCell: (params) => (
      <>
        <DetailsButton orderId={params.row.orderId} />
      </>
    ),
  },
  {
    field: '',
    headerName: '',
    width: 80,
    renderCell: (params) => (
      <>
        <DeleteButton orderId={params.row.orderId} />
      </>
    ),
  },
];

const useGetRows = () => {
  const userSelector = useAppSelector(selectUser);
  const user = userSelector.userDetails;
  const { data } = useFetchUserOrders(user?.userId as number, true);
  const userOrders: IOrder[] = data?.result || []; // Extract the array of orders from the query result
  const rows = userOrders?.map((userOrder) => {
    return {
      id: userOrder.id,
      orderId: userOrder.orderId,
      status: userOrder.status,
      price: userOrder.price,
      ordertitle: userOrder.ordertitle,
      orderdescription: userOrder.orderdescription,
      statusMessage: userOrder.statusMessage,
      createdAt: userOrder.createdAt,
      updatedAt: userOrder.updatedAt,
      repairingAt: userOrder.repairingAt,
      repairedAt: userOrder.repairedAt,
      completedAt: userOrder.completedAt,
      cancelledAt: userOrder.cancelledAt,
      diagnosingAt: userOrder.diagnosingAt,
    };
  });
  return rows || [];
};

export { columns, useGetRows };
