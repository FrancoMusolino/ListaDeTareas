import React, { createContext, useReducer, useEffect, useContext } from "react";

import { tareasInitialState, tareasReducer } from "../reducers";
import { TAREAS_TYPES } from "../actions";

export const TareasContext = createContext();

export const TareasContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tareasReducer, tareasInitialState);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      let data = JSON.parse(localStorage.getItem("data"));
      dispatch({ type: TAREAS_TYPES.DATAOFLOCALSTORAGE, payload: data });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.db));
  }, [state.db]);

  const data = { state, dispatch };

  return (
    <TareasContext.Provider value={data}>{children}</TareasContext.Provider>
  );
};

export const useTareasContext = () => {
  const context = useContext(TareasContext);

  if (context === undefined) {
    throw new Error(
      "useTareasContext must be use inside a TareasContext.Provider"
    );
  }

  return context;
};
