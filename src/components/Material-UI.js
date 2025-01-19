import React from 'react';
import { Table, TableBody, TableContainer, Paper, Box, Typography } from '@mui/material';
import HeaderTable from '../controls/HeaderTable';
import {TableHeaderBasic} from '../controls/TableHeadComponent';
import {useTableData} from '../data/useTableData'

import { TableCell, TextField, Button, Select, MenuItem, TableRow } from '@mui/material';
import {displayType, displayText, powerType, sensorType } from '../data/tableOptions';
import {useNumber} from '../data/dataValues'
import '../styles.css';

const MuiTableWithInputs = () => {

  const { rows } = useTableData();
  const { sensorInputCount } = useNumber();
  const {
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
  var dataBoarder = { borderRight: '2px solid #ccc' };

  return (
    <div>
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
            //<TableRowComponent key={row.id} row={row} />
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
        <SelectCell value={row.displayTypeID} onChange={(event) => handleSelectDisplayType(event, row.id)} options={displayType} />
        <TableCell sx={dataBoarder}>
        <TextField
            defaultValue={row.offset}
            onChange={(e) => handleOffsetChange(row.id, 'offset', e.target.value)}
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
        <SelectCell value={row.displayTextID} onChange={(event) => handleSelectDisplayText(event, row.id)} options={displayText} />
        <SelectCell value={row.powerID} onChange={(event) => handleSelectPowerType(event, row.id)} options={powerType} />
        <SelectCell value={row.sensorID} onChange={(event) => handleSelectSensorType(event, row.id)} options={sensorType} />
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

const SelectCell = ({ value, onChange, options }) => (
  <TableCell>
    <Select
      style={{ width: '100px', minWidth: '150px' }}
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </TableCell>
);

export default MuiTableWithInputs;