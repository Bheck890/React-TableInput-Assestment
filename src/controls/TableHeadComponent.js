import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useTableData} from '../data/useTableData'


export const TableHeader = () => {

    const { handleModeChange} = useTableData();
    var headerBoarder = { borderRight: '5px solid #ccc', borderLeft: '5px solid #ccc' };

    return (
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
          <TableCell
            sx={headerBoarder}
            onClick={handleModeChange}
            style={{ cursor: 'pointer' }}
          >
            Auto/Manual (Click here for all)
          </TableCell>
        </TableRow>
      </TableHead>
    );
  };


  export const TableHeaderBasic = () => {

    const { handleModeChange} = useTableData();
    var headerBoarder = { borderRight: '5px solid #ccc', borderLeft: '5px solid #ccc' };

    return (
      <TableHead>
        <TableRow>
          <TableCell sx={headerBoarder}>ID Tag</TableCell>
          <TableCell sx={headerBoarder}>Name</TableCell>
          <TableCell sx={headerBoarder}>Display Type</TableCell>
          <TableCell sx={headerBoarder}>Offset</TableCell>
          <TableCell sx={headerBoarder}>Manual</TableCell>
          <TableCell sx={headerBoarder}>Display Text</TableCell>
          <TableCell sx={headerBoarder}>Power Type</TableCell>
          <TableCell sx={headerBoarder}>Sensor Type</TableCell>
          <TableCell
            sx={headerBoarder}
            onClick={handleModeChange}
            style={{ cursor: 'pointer' }}
          >
            Auto/Manual
          </TableCell>
        </TableRow>
      </TableHead>
    );
  };