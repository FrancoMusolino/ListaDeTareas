import { TAREAS_TYPES } from "../actions";

export const tareasInitialState = {
  db: [],
};

export function tareasReducer(state, action) {
  switch (action.type) {
    case TAREAS_TYPES.DATAOFLOCALSTORAGE:
      return {
        ...state,
        db: action.payload,
      };

    case TAREAS_TYPES.SENDFORM:
      return {
        ...state,
        db: [...state.db, action.payload],
      };

    case TAREAS_TYPES.SENDFORMWITHCHANGES: {
      let newDb = state.db.map((el) =>
        el.id === action.payload[1] ? action.payload[0] : el
      );

      return {
        ...state,
        db: newDb,
      };
    }

    case TAREAS_TYPES.DELETEROW: {
      let newDb = state.db.filter((el) => el.id !== action.payload);

      return {
        ...state,
        db: newDb,
      };
    }

    default:
      return state;
  }
}
