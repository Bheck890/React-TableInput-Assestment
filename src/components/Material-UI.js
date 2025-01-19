import React from 'react';
import { Table, TableBody, TableContainer, Paper, Box, Typography } from '@mui/material';
import HeaderTable from '../controls/HeaderTable';
import {TableHeaderBasic} from '../controls/TableHeadComponent';
import {TableRowComponent} from '../controls/TableRowComponent';
import {useTableData} from '../data/useTableData'

import '../styles.css';

const MuiTableWithInputs = () => {

  const { rows } = useTableData();

  var tableBoarder = { marginTop: 1, borderRight: '5px solid #ccc' };

  return (
    <div>
    {}
    <HeaderTable />
    
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#c0c0c0',
        color: 'black',
        padding: 2,
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
      }}>
        <Typography variant="h6">Sensor Input Information Screen</Typography>
    </Box>,
    
    <TableContainer component={Paper} sx={tableBoarder}>
      <Table>
        <TableHeaderBasic />
        <TableBody>
          {rows.map((row) => (
            <TableRowComponent key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default MuiTableWithInputs;