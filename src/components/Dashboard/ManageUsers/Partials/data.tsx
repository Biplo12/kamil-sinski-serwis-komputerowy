import { GridColDef } from '@material-ui/data-grid';

import DetailsButton from '@/components/Dashboard/Common/DetailsButton';
import DeleteButton from '@/components/Dashboard/ManageUsers/Partials/DeleteButton';

import { useAppSelector } from '@/store/store-hooks';

import { selectUser } from '@/state/userSlice';
const columns: GridColDef[] = [
  { field: 'userId', headerName: 'ID', width: 100 },
  { field: 'firstname', headerName: 'First Name', width: 400 },
  { field: 'lastname', headerName: 'Last Name', width: 400 },
  { field: 'phonenumber', headerName: 'Phonenumber', width: 150 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'createdAt', headerName: 'Created At', width: 200 },
  { field: 'updatedAt', headerName: 'Updated At', width: 200 },
  {
    field: ' ',
    headerName: '',
    width: 80,
    renderCell: (params) => (
      <>
        <DetailsButton userId={params.row.userId} />
      </>
    ),
  },
  {
    field: '',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <>
        <DetailsButton userId={params.row.userId} />
      </>
    ),
  },
  {
    field: '',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <>
        <DeleteButton userId={params.row.userId} />
      </>
    ),
  },
];

const useGetRows = () => {
  const usersSelector = useAppSelector(selectUser);
  const users = usersSelector.users;
  const rows = users?.map((user) => {
    return {
      id: user.id,
      userId: user.userId,
      firstname: user.firstname,
      lastname: user.lastname,
      phonenumber: user.phonenumber,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  });
  return rows || [];
};
export { columns, useGetRows };
