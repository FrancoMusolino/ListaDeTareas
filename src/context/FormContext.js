import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useDateContext } from "./DateContext";

import { formInitialState, formReducer } from "../reducers";
import { FORM_TYPES } from "../actions";

const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, formInitialState);
  const { dateToPrint } = useDateContext();

  useEffect(() => {
    if (dateToPrint) {
      dispatch({ type: FORM_TYPES.UPDATEDATE, payload: dateToPrint });
    }
  }, [dateToPrint]);

  const data = { state, dispatch };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormContext must be use inside a FormContext.Provider");
  }

  return context;
};
