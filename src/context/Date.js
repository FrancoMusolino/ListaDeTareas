import React, { createContext, useState, useEffect } from "react";

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [dateToPrint, setDateToPrint] = useState(null);

  let classDate = new Date().toISOString().split("T")[0];

  useEffect(() => setDateToPrint(classDate), [classDate]);

  const data = { dateToPrint };

  return <DateContext.Provider value={data}>{children}</DateContext.Provider>;
};

export { DateProvider };

export default DateContext;
