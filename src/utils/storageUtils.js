
export const loadData = () => {
    // Retrieve the JSON string, 
    // from the browser Storage with item Name
    const dataString = localStorage.getItem('sensorData');
    // Parse the JSON string back to JavaScript array, 
    // else make the array
    return dataString ? JSON.parse(dataString) : generateRows();
  };
  
  export const saveData = (newRows) => {
    //Saving Local Browser Storage
    localStorage.setItem('sensorData', JSON.stringify(newRows));
  };


const generateRows = () => {
    let initialRows = [];
    for (let i = 1; i <= 50; i++) {
      initialRows.push({
        id: i,
        tagID: 0,
        name: `NameText ${i}`,
        displayTypeID: 0,
        offset: 'Not Used',
        manualValue: '0',
        displayTextID: 0,
        powerID: 0,
        sensorID: 0,
        typeBool: 0,
      });
    }
    return initialRows;
  };