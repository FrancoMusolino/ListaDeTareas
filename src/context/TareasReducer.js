import React, { createContext, useReducer, useEffect, useContext } from "react";
import { tareasInitialState, tareasReducer } from "../reducers/tareasReducer";
import { TYPES } from "../actions/tareasActions";
import DateContext from "./Date";

const TareasReducer = createContext();

const TareasReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tareasReducer, tareasInitialState);
  const { dateToPrint } = useContext(DateContext);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      let data = JSON.parse(localStorage.getItem("data"));
      dispatch({ type: TYPES.DATAOFLOCALSTORAGE, payload: data });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.db));
  }, [state.db]);

  useEffect(() => {
    dispatch({ type: TYPES.UPDATEDATE, payload: dateToPrint });
  }, [dateToPrint]);

  const data = { state, dispatch };

  return (
    <TareasReducer.Provider value={data}>{children}</TareasReducer.Provider>
  );
};

export { TareasReducerProvider };

export default TareasReducer;
