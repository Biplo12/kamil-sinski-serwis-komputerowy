import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { GridColDef, GridRowData } from '@material-ui/data-grid';
import React from 'react';

interface ITableComponent {
  rows: GridRowData[];
  columns: GridColDef[];
}

const TableComponent: React.FC<ITableComponent> = ({
  rows,
  columns,
}): JSX.Element => {
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
            padding: '0 1rem',
          }}
          pageSize={10}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default TableComponent;
