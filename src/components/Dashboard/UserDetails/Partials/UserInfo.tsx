import React from 'react';

import OrdersTable from '@/components/Dashboard/Common/TableComponent';
import {
  columns,
  useGetRows,
} from '@/components/Dashboard/UserDetails/Partials/data';
const UserInfo: React.FC = (): JSX.Element => {
  const rows = useGetRows();
  return (
    <div>
      <OrdersTable rows={rows} columns={columns} />
    </div>
  );
};
export default UserInfo;
