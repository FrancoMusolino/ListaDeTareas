import { TYPES } from "../actions/tareasActions"

export const tareasInitialState = {
    form: {
        name: "",
        date: "",
    },

    db: [
        { name: "Alario", date: "12-10-2020", id: 1 },
        { name: "Messi", date: "12-10-2020", id: 2 },
        { name: "Ronaldo", date: "12-10-2020", id: 3 }
    ]
};

export function tareasReducer(state, action) {
    switch (action.type) {
        case TYPES.DELETEFORM:
            return {
                ...state,
                form: {
                    name: "",
                    date: ""
                }
            }

        case TYPES.SENDFORM:
            return {
                ...state,
                db: [...state.db, action.payload]
            }

        case TYPES.DETECTCHANGES:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload[0]]: action.payload[1]
                }
            }

        case TYPES.DELETEROW: {
            let newDb = state.db.filter(el => el.id !== action.payload)

            return {
                ...state,
                db: newDb
            }
        }

        case TYPES.EDITROW:
            return {
                ...state,
                form: {
                    name: action.payload[0],
                    date: action.payload[1],
                }
            }

        default: return state;

    }
}