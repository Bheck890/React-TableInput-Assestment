import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const MuiTableWithInputs = () => {
  const rows = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 28 },
  ];

  const handleInputChange = (rowId, field, value) => {
    console.log(`Row ID: ${rowId}, Field: ${field}, Value: ${value}`);
    // Add logic here to update state or data model
  };

  return (
    <h1>Hello World</h1>,
    <TableContainer component={Paper}>
      <Table sx={{ borderCollapse: 'collapse' }}>
        <TableHead>
          <TableRow>
          <TableCell sx={{ borderRight: '1px solid #ccc' }}>Name</TableCell>
          <TableCell sx={{ borderRight: '1px solid #ccc' }}>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                <TextField
                  defaultValue={row.name}
                  onChange={(e) => handleInputChange(row.id, 'name', e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                <TextField
                  defaultValue={row.age}
                  type="number"
                  onChange={(e) => handleInputChange(row.id, 'age', e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTableWithInputs;