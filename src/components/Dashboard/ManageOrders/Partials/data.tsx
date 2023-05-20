import { GridColDef } from '@material-ui/data-grid';

import DetailsButton from '@/components/Dashboard/Common/DetailsButton';
import DeleteButton from '@/components/Dashboard/ManageOrders/Partials/DeleteButton';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';
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
  const ordersSelector = useAppSelector(selectOrder);
  const orders = ordersSelector.orders;
  const rows = orders?.map((order) => {
    return {
      id: order.id,
      orderId: order.orderId,
      status: order.status,
      price: order.price,
      ordertitle: order.ordertitle,
      orderdescription: order.orderdescription,
      statusMessage: order.statusMessage,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      repairingAt: order.repairingAt,
      repairedAt: order.repairedAt,
      completedAt: order.completedAt,
      cancelledAt: order.cancelledAt,
      diagnosingAt: order.diagnosingAt,
    };
  });
  return rows || [];
};
export { columns, useGetRows };
