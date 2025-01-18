import React, { useState } from 'react';

const TableLayout = () => {
  // Define table rows and columns as state
  const [data, setData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  // Handle input changes
  const handleInputChange = (rowIndex, colIndex, value) => {
    const updatedData = data.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? value : cell))
    );
    setData(updatedData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} style={{ width: "100px", textAlign: "center" }}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                    style={{ width: "90%" }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLayout;
