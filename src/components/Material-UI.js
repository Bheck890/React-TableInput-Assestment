import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, TextField, Button, Select, MenuItem } from '@mui/material';
import HeaderTable from '../controls/HeaderTable';
import {useNumber} from '../data/dataValues'
import {useTableData} from '../data/useTableData'
import {displayType, displayText, powerType, sensorType } from '../data/tableOptions';
import '../styles.css';

const MuiTableWithInputs = () => {

  const { sensorInputCount } = useNumber();
  const { rows, 
    handleModeChange,
    handleChangeType,
    handleNameChange,
    handleSelectDisplayType,
    handleOffsetChange,
    handleManualChange,
    handleSelectDisplayText,
    handleSelectPowerType,
    handleSelectSensorType,
    handleStateChange,
   } = useTableData();

  var tableBoarder = { marginTop: 1, borderRight: '5px solid #ccc' };
  var headerBoarder = { borderRight: '5px solid #ccc', borderLeft: '5px solid #ccc' };
  var dataBoarder = { borderRight: '2px solid #ccc' };


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
            <TableRow key={row.id} style={{ backgroundColor: row.id > sensorInputCount ? 'yellow' : 'transparent' }}>
              <TableCell sx={dataBoarder}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{row.tagID}</span>
                  <Button 
                    variant="contained" 
                    onClick={() => handleChangeType(row.name)}
                    size="small" 
                    className="greyButton"
                    style={{ backgroundColor: '#bdbdbd', color: '#fff',
                      marginLeft: '10px', width: '3px',padding: '0px',minWidth: '30px'}} // Removes space between text and button
                  >
                    ..
                  </Button>
                </div>
              </TableCell>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.name}
                  onChange={(e) => handleNameChange(row.id, 'name', e.target.value)}
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
                  onChange={(e) => handleOffsetChange(row.id, 'offset', e.target.value)}
                  //variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell sx={dataBoarder}>
                <TextField
                  defaultValue={row.manualValue}
                  onChange={(e) => handleManualChange(row.id, 'manual', e.target.value)}
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
                  <span>{row.typeBool === 0 ? "AUTO" : "Manual"}</span> 
                  <Button 
                    variant="contained" 
                    onClick={() => handleStateChange(row.id, row.typeBool === 0 ? 1 : 0)}
                    size="small" 
                    className="greyButton"
                    style={{ backgroundColor: '#bdbdbd', color: '#fff',
                      marginLeft: '10px', width: '3px',padding: '0px',minWidth: '30px'}} // Removes space between text and button
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