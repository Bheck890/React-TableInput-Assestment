import { useState } from 'react';
import { loadData } from '../utils/storageUtils';

export const useTableData = () => {
    
  const [rows, setRows] = useState(loadData());

  //Change the Point Number Type (Not applicable Currently)
  const handleChangeType = (rowId, value) => {
    console.log(`Row ID: ${rowId} Value: ${value}`);
  };

  const handleNameChange = (rowId, value) => {
    console.log(`Row ID: ${rowId}, Value: ${value}`);
  };

  const handleOffsetChange = (rowId, value) => {
    console.log(`Row ID: ${rowId}, Value: ${value}`);
  };

  const handleManualChange = (rowId, value) => {
    console.log(`Row ID: ${rowId}, Value: ${value}`);
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


  // Function to handle the Select all Auto/Manual System
  const handleModeChange = (rowId) => {
    alert(`Button clicked ${rowId}`);
  };

  //Change the Auto/Manual System
  const handleStateChange = (id, value) => {

    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, typeBool: value };
      }
      return row;
    });

    setRows(newRows);
  };
  

  return {
    rows,
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
  };
};