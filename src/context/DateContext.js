import React, { createContext, useState, useEffect, useContext } from "react";

const DateContext = createContext();

export const DateContextProvider = ({ children }) => {
  const [dateToPrint, setDateToPrint] = useState(null);

  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => setDateToPrint(currentDate), [currentDate]);

  const data = { dateToPrint };

  return <DateContext.Provider value={data}>{children}</DateContext.Provider>;
};

export const useDateContext = () => {
  const context = useContext(DateContext);

  if (context === undefined) {
    throw new Error("useDateContext must be use inside a DateContext.Provider");
  }

  return context;
};
