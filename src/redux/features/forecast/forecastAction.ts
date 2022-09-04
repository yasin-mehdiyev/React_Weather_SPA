import * as forecastService from '../../../services/ForecastService';
import { setForecasts } from "./forecastSlice";

export const fetchForecasts = (region: string) => async (dispatch: any) => {
    try {
        const response: any = await forecastService.getForecasts(region);
        dispatch(setForecasts(response));
    } catch (error) {
        console.log("error", error);
    }
};