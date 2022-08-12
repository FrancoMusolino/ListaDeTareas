import { FORM_TYPES } from "../actions";

export const formInitialState = {
  name: "",
  date: "",
};

export function formReducer(state, action) {
  switch (action.type) {
    case FORM_TYPES.UPDATEDATE:
      return {
        ...state,
        date: action.payload,
      };

    case FORM_TYPES.CLEAN_FORM:
      return {
        ...state,
        name: "",
        date: action.payload,
        id: null,
      };

    case FORM_TYPES.DETECTCHANGES:
      return {
        ...state,
        [action.payload[0]]: action.payload[1],
      };

    case FORM_TYPES.EDITROW:
      return {
        ...state,
        name: action.payload.name,
        date: action.payload.date,
        id: action.payload.id,
      };

    default:
      return state;
  }
}
