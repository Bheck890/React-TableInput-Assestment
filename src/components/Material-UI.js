import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, TextField, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';

const MuiTableWithInputs = () => {
  const rows = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Alice Johnson', age: 28 },
  ];

  // State to hold the number value
  const [number, setNumber] = useState(20);

  // Functions to change the number
  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  const handleInputChange = (rowId, field, value) => {
    console.log(`Row ID: ${rowId}, Field: ${field}, Value: ${value}`);
    // Add logic here to update state or data model
  };

  var tableBoarder = { marginTop: 1, borderRight: '5px solid #ccc' };
  var headerBoarder = { borderRight: '5px solid #ccc' };
  var dataBoarder = { borderRight: '2px solid #ccc' };

  return (
    <div>
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
        <TableContainer component={Paper} sx={{ marginTop: 2, width: 'auto' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Current Number</TableCell>
                <TableCell>{number}</TableCell>
                <TableCell sx={{padding: '4px' }} >
                  {/* Buttons to change the number */}
                  <IconButton  
                    sx={{transform: 'rotate(180deg)' }} 
                    variant="contained" color="primary" onClick={increment}>
                    <PlayArrowIcon />
                  </IconButton>
                  <IconButton variant="contained" color="secondary" onClick={decrement}>
                    <PlayArrowIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
    </Box>,
    
    
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
        <TableHead>
          <TableRow>
          <TableCell sx={headerBoarder}>Point Number</TableCell>
          <TableCell sx={headerBoarder}>Name (1 to 10 char)</TableCell>
          <TableCell sx={headerBoarder}>Display Type</TableCell>
          <TableCell sx={headerBoarder}>Offset</TableCell>
          <TableCell sx={headerBoarder}>Manual Value or NC/NO (Select to Change)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.name}
                  onChange={(e) => handleInputChange(row.id, 'name', e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={dataBoarder}>
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
    </div>
  );
};

export default MuiTableWithInputs;