import React from 'react';

import TableComponent from '@/components/Dashboard/Common/TableComponent';
import TopBar from '@/components/Dashboard/Layout/TopBar';
import {
  columns,
  useGetRows,
} from '@/components/Dashboard/ManageUsers/Partials/data';
interface IManageUsers {
  sidebarState: boolean;
}

const ManageUsers: React.FC<IManageUsers> = ({ sidebarState }): JSX.Element => {
  const rows = useGetRows();
  return (
    <div
      className={`${
        sidebarState ? 'ml-[17rem]' : 'ml-8'
      } mxslg:ml-16 min-h-[calc(100vh - 5.3rem)] mt-[5.3rem] h-auto px-4 duration-300 ease-in-out`}
    >
      <TopBar />
      <h1 className='my-5 text-3xl font-semibold'>Manage Users</h1>
      <TableComponent rows={rows} columns={columns} />
    </div>
  );
};
export default ManageUsers;
