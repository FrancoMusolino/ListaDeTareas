import React, { createContext, useState, useEffect } from "react";

const DateContext = createContext();

const DateProvider = ({ children }) => {
    const [dateToPrint, setDateToPrint] = useState(null);

    let classDate = new Date(),
        yearNow = classDate.getFullYear(),
        monthNow = classDate.getMonth() + 1,
        dateNow = classDate.getDate();

    useEffect(() => {
        if (monthNow > 9 && dateNow < 10) {
            setDateToPrint(`${yearNow}-${monthNow}-0${dateNow}`);
        } else if (monthNow > 9 && dateNow > 9) {
            setDateToPrint(`${yearNow}-${monthNow}-${dateNow}`);
        } else if (monthNow < 10 && dateNow < 10) {
            setDateToPrint(`${yearNow}-0${monthNow}-0${dateNow}`);
        } else {
            setDateToPrint(`${yearNow}-0${monthNow}-${dateNow}`);
        }
    }, []);

    const data = { dateToPrint }

    return (
        <DateContext.Provider value={data}>{children}</DateContext.Provider>
    );
};

export { DateProvider };

export default DateContext;




export const totalDate = 0


