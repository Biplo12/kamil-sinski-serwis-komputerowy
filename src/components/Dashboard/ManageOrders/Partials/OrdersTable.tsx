import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';

import {
  columns,
  useGetRows,
} from '@/components/Dashboard/ManageOrders/Partials/data';

const OrdersTable: React.FC = (): JSX.Element => {
  const rows = useGetRows();
  const theme = createTheme({
    overrides: {
      MuiTableSortLabel: {
        icon: {
          color: 'white',
        },
      },
      MuiTablePagination: {
        root: {
          color: 'white',
        },
      },
    },
  });

  return (
    <div className='h-[70vh] w-full text-white'>
      <MuiThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={columns}
          style={{
            backgroundColor: '#1F2937',
            color: 'white',
            border: '1px solid #01a3ff',
          }}
          sortModel={[
            {
              field: 'createdAt',
              sort: 'desc',
            },
          ]}
          pageSize={10}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default OrdersTable;
