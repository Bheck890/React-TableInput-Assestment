import React, { createContext, useState, useContext } from 'react';

const NumberContext = createContext(null);

export const useNumber = () => useContext(NumberContext);

export const NumberProvider = ({ children }) => {
  const [sensorInputCount, setNumber] = useState(5);

  // Functions to change the number
  const increment = () => 
    {
        console.log("I" + sensorInputCount)
      if (sensorInputCount <= 111)
        setNumber(sensorInputCount + 1)
    };
    const decrement = () => 
    {
        console.log("D" + sensorInputCount)
      if (sensorInputCount > 0)
        setNumber(sensorInputCount - 1)
    };

  return (
    <NumberContext.Provider value={{ sensorInputCount, increment, decrement }}>
      {children}
    </NumberContext.Provider>
  );
};