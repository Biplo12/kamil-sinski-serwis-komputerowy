import { GridColDef } from '@material-ui/data-grid';

import DetailsButton from '@/components/Dashboard/Common/DetailsButton';

import { useAppSelector } from '@/store/store-hooks';

import { selectOrder } from '@/state/orderSlice';
const columns: GridColDef[] = [
  { field: 'orderId', headerName: 'ID', width: 100 },
  { field: 'ordertitle', headerName: 'Title', width: 400 },
  { field: 'orderdescription', headerName: 'Description', width: 400 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'statusMessage', headerName: 'Status Message', width: 200 },
  { field: 'price', headerName: 'Price', width: 120 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
  { field: 'updatedAt', headerName: 'Updated At', width: 200 },
  { field: 'repairingAt', headerName: 'Repairing At', width: 200 },
  { field: 'repairedAt', headerName: 'Repaired At', width: 200 },
  {
    field: '',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <>
        <DetailsButton orderId={params.row.orderId} />
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
    };
  });
  return rows || [];
};
export { columns, useGetRows };
