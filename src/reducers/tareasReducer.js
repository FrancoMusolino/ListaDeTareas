import { TYPES } from "../actions/tareasActions"

export const tareasInitialState = {
    form: {
        name: "",
        date: "",
    },

    data: []
};

export function tareasReducer(state, action) {
    switch (action.type) {
        case TYPES.DELETEFORM:
            return {
                ...state,
                form: {
                    name: "",
                    date: "",
                }
            };

        case TYPES.SENDFORM:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            };

        case TYPES.DETECTCHANGES:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.payload[0]]: action.payload[1]
                }
            };

        case TYPES.DELETEROW:
            return {};

        case TYPES.EDITROW:
            return {};

        default: return state;

    }
}