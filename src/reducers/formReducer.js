import { FORM_TYPES } from "../actions";

export const formInitialState = {
  name: "",
  date: "",
};

export function formReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case FORM_TYPES.UPDATEDATE:
      return {
        ...state,
        date: payload,
      };

    case FORM_TYPES.CLEAN_FORM:
      return {
        ...state,
        name: "",
        date: payload,
        id: null,
      };

    case FORM_TYPES.DETECTCHANGES:
      return {
        ...state,
        ...payload,
      };

    case FORM_TYPES.EDITROW:
      return {
        ...state,
        name: payload.name,
        date: payload.date,
        id: payload.id,
      };

    default:
      return state;
  }
}
