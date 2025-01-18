import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import '../styles.css';

const MuiTableWithInputs = () => {
  const [rows, setRows] = useState([
    { id: 1, tagID: 0, name: 'NameText', displayTypeID: 0, offset: 'Not Used', manualValue: '0', displayTextID: 0, powerID: 0, sensorID: 0, typeBool: 0, },
    { id: 2, tagID: 0, name: 'NameText', displayTypeID: 0, offset: 'Not Used', manualValue: '0', displayTextID: 0, powerID: 0, sensorID: 0, typeBool: 0, },
  ]);

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

  const displayType = [
    { label: "None", value: 0 },
    { label: "dropdownItem1", value: 1 },
    { label: "dropdownItem2", value: 2 },
    { label: "dropdownItem3", value: 3 },
  ];

  const displayText = [
    { label: "Not Used", value: 0 },
    { label: "dropdownItem1", value: 1 },
    { label: "dropdownItem2", value: 2 },
    { label: "dropdownItem3", value: 3 },
    { label: "dropdownItem4", value: 4 },
  ];

  const powerType = [
    { label: "Not Used", value: 0 },
    { label: "dropdownItem1", value: 1 },
    { label: "dropdownItem2", value: 2 },
    { label: "dropdownItem3", value: 3 },
    { label: "dropdownItem4", value: 4 },
    { label: "dropdownItem5", value: 5 },
  ];

  const sensorType = [
    { label: "Not Used", value: 0 },
    { label: "dropdownItem1", value: 1 },
    { label: "dropdownItem2", value: 2 },
    { label: "dropdownItem3", value: 3 },
    { label: "dropdownItem4", value: 4 },
    { label: "dropdownItem5", value: 5 },
    { label: "dropdownItem6", value: 6 },
  ];



  //Change the type of point number
  const handleChangeType = (rowId, field, value) => {
    console.log(`Row ID: ${rowId}, Field: ${field}, Value: ${value}`);
    // Add logic here to update state or data model
  };

  //Change the type of point number
  const handleStateChange = (id, value) => {

    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, typeBool: value };
      }
      return row;
    });
    setRows(newRows);

    //console.log(`Row ID: ${rowId}, Field: ${field}, Value: ${value}`);
    // Add logic here to update state or data model
  };

  const handleNameChange = (rowId, field, value) => {
    console.log(`Row ID: ${rowId}, Field: ${field}, Value: ${value}`);
    // Add logic here to update state or data model
  };


  // Function to handle the Select all Auto/Manual System
  const handleModeChange = (rowId) => {
    alert(`Button clicked for row ${rowId}`);
  };

  
  //Selects the Drop Down
  const handleSelectDisplayType = (event, id) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, displayTypeID: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  //Selects the Drop Down
  const handleSelectDisplayText = (event, id) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, displayTextID: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  //Selects the Drop Down
  const handleSelectPowerType = (event, id) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, powerID: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  //Selects the Drop Down
  const handleSelectSensorType = (event, id) => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, sensorID: event.target.value };
      }
      return row;
    });
    setRows(newRows);
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{row.tagID}</span> {/* Text */}
                  <Button 
                    variant="contained" 
                    onClick={() => handleChangeType(row.name)}
                    size="small" // Makes the button smaller
                    className="greyButton"
                    style={{ backgroundColor: '#bdbdbd', color: '#fff',
                      marginLeft: '10px', width: '3px',padding: '0px',minWidth: '30px'}} // Adds space between text and button
                  >
                    ..
                  </Button>
                </div>
              </TableCell>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.name}
                  //type="number"
                  onChange={(e) => handleNameChange(row.id, 'displayname', e.target.value)}
                  //variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={dataBoarder}>
                <Select
                    style={{ 
                      width: '100px',minWidth: '150px'}}
                    value={row.displayTypeID}
                    onChange={(event) => handleSelectDisplayType(event, row.id)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {displayType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
              </TableCell>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.offset}
                  //type="number"
                  onChange={(e) => handleNameChange(row.id, 'displayname', e.target.value)}
                  //variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.manualValue}
                  //type="number"
                  onChange={(e) => handleNameChange(row.id, 'displayname', e.target.value)}
                  //variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={dataBoarder}>
                <Select
                    style={{ 
                      width: '100px',minWidth: '150px'}}
                    value={row.displayTextID}
                    onChange={(event) => handleSelectDisplayText(event, row.id)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {displayText.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
              </TableCell>
              <TableCell sx={dataBoarder}>
                <Select
                    style={{ 
                      width: '100px',minWidth: '150px'}}
                    value={row.powerID}
                    onChange={(event) => handleSelectPowerType(event, row.id)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {powerType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
              </TableCell>
              <TableCell sx={dataBoarder}>
                <Select
                    style={{ 
                      width: '100px',minWidth: '150px'}}
                    value={row.sensorID}
                    onChange={(event) => handleSelectSensorType(event, row.id)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    {sensorType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
              </TableCell>
              <TableCell sx={dataBoarder}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{row.typeBool == 0 ? "AUTO" : "Manual"}</span> 
                  <Button 
                    variant="contained" 
                    onClick={() => handleStateChange(row.id, row.typeBool == 0 ? 1 : 0)}
                    size="small" // Makes the button smaller
                    className="greyButton"
                    style={{ backgroundColor: '#bdbdbd', color: '#fff',
                      marginLeft: '10px', width: '3px',padding: '0px',minWidth: '30px'}} // Adds space between text and button
                  >
                    ..
                  </Button>
                </div>
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