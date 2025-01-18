import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, TextField } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';

const MuiTableWithInputs = () => {
  const rows = [
    { id: 1, tagID: 0, name: 'NameText', displayNameID: 0, offset: 'Not Used', manualValue: '0', displayTextID: 0, powerID: 0, sensorID: 0, typeBool: 0, },
    { id: 2, tagID: 0, name: 'NameText', displayNameID: 0, offset: 'Not Used', manualValue: '0', displayTextID: 0, powerID: 0, sensorID: 0, typeBool: 0, },
  ];

  // State to hold the number value
  const [number, setNumber] = useState(1);

  // Functions to change the number
  const increment = () => 
  {
    if (number <= 111)
      setNumber(number + 1)
  };
  const decrement = () => 
  {
    if (number > 0)
      setNumber(number - 1)
  };

  const handleNameChange = (rowId, field, value) => {
    console.log(`Row ID: ${rowId}, Field: ${field}, Value: ${value}`);
    // Add logic here to update state or data model
  };

  // Function to handle the button click
  const handleModeChange = (rowId) => {
    alert(`Button clicked for row ${rowId}`);
  };

  var tableBoarder = { marginTop: 1, borderRight: '5px solid #ccc' };
  var headerBoarder = { borderRight: '5px solid #ccc', borderLeft: '5px solid #ccc' };
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
                <TableCell>Total Number of SI's</TableCell>
                <TableCell>{number}</TableCell>
                <TableCell sx={{padding: '4px' }} >
                  <IconButton  
                    sx={{transform: 'rotate(180deg)' }} 
                    variant="contained" color="primary" onClick={decrement}>
                    <PlayArrowIcon />
                  </IconButton>
                  <IconButton variant="contained" color="secondary" onClick={increment}>
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
          <TableCell sx={headerBoarder}>Display Text (Select to Change)</TableCell>
          <TableCell sx={headerBoarder}>Temp./ GPM / CFM / Pwr Factor SI</TableCell>
          <TableCell sx={headerBoarder}>Humed./ PSI/Temp,/ Diff./ Enthal. Diff.</TableCell>
          <TableCell sx={headerBoarder} onClick={handleModeChange}>Auto/Manual (Click here for all)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} style={{ backgroundColor: row.id > number ? 'yellow' : 'transparent' }}>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.name}
                  onChange={(e) => handleNameChange(row.id, 'name', e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.age}
                  //type="number"
                  onChange={(e) => handleNameChange(row.id, 'displayname', e.target.value)}
                  //variant="outlined"
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