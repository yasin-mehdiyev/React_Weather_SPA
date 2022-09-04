import { combineReducers } from "redux";

// Slices
import forecastReducer from '../features/forecast/forecastSlice';

export const rootReducer : any = combineReducers({
    forecasts: forecastReducer,
});