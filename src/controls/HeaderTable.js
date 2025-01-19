import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Box } from '@mui/material';
import { useNumber } from '../data/dataValues.js'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';
import '../styles.css';

const HeaderTable = () => {

    const { sensorInputCount, increment, decrement } = useNumber();

    return <Box 
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
                <TableCell>Total Number of SI's </TableCell>
                <TableCell>{sensorInputCount}</TableCell>
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
    </Box>
}
export default HeaderTable;