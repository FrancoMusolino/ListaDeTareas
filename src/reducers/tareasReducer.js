import { TYPES } from "../actions/tareasActions"

export const tareasInitialState = {
    form: {
        name: "",
        date: "",
    },

    db: [
        { name: "Proyecto SASS", date: "13-03-2022", id: 1 },
        { name: "JavaScript Jony Mircha", date: "15-03-2022", id: 2 },
    ]
};

export function tareasReducer(state, action) {
    switch (action.type) {
        case TYPES.DATAOFLOCALSTORAGE:
            return {
                ...state,
                db: action.payload
            }

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

        case TYPES.SENDFORMWITHCHANGES: {
            let newDb = state.db.map(el => el.id === action.payload[1] ? action.payload[0] : el)

            return {
                ...state,
                db: newDb
            }
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
                    id: action.payload[2]
                }
            }

        default: return state;

    }
}