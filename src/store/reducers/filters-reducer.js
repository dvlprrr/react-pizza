import { SET_SORT_BY, SET_CATEGORY } from "../actions/filters-action";
const initialState = {
    sortBy: "popular",
    category: 0,
}

export const filtersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: payload,
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: payload,
            }
        default:
            return state

    }
}