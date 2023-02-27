import { SET_PIZZAS } from "../actions/pizzas-actions";

const initialState = {
    items: [],
    isLoaded: false
}

export const pizzasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PIZZAS:

            return {
                ...state,
                items: payload,
                isLoaded: true,
            }

        default:
            return state
    }
}