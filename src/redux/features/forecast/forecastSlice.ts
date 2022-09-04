import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root/store';

const initialState: any = {
    forecasts: [],
};

export const forecastSlice = createSlice({
    name: 'forecasts',
    initialState,
    reducers: {
        setForecasts: (state, action) => {
            state.forecasts = action.payload;
        },
    }
});

export const { setForecasts } = forecastSlice.actions;

export const selectForecasts = (state: RootState) => state.forecasts.forecasts;

export default forecastSlice.reducer;