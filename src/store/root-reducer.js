import { combineReducers } from "redux";

import { filtersReducer } from "./reducers/filters-reducer";
import { pizzasReducer } from "./reducers/pizzas-reducer";


export const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
})
