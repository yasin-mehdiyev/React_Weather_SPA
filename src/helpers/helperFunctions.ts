import moment from "moment";
import { WEATHER_CONDITION_ENUMS } from "./constants";

export const calculateDayToDatetime = (date: string): string => {
    const day = (moment(date).format('dddd')).substring(0, 3);
    return day;
};

export const findWeatherPhotoName = (code: string, description: string): string => {
    let iconName: string = "";
    if (code === WEATHER_CONDITION_ENUMS.CLEAR.C01D) {
        iconName = "clear_sky.jpg";
    } else if (code === WEATHER_CONDITION_ENUMS.CLOUD.C02D || code === WEATHER_CONDITION_ENUMS.CLOUD.C03D || code === WEATHER_CONDITION_ENUMS.CLOUD.C04D || description.includes("clouds")) {
        iconName = "cloudy.png";
    } else if (code === WEATHER_CONDITION_ENUMS.RAIN.R01D || code === WEATHER_CONDITION_ENUMS.RAIN.T02D || description.includes("rain")) {
        iconName = "rainy.png";
    } else {
        iconName = "snowy.png";
    }
    return iconName;
};

export const bestDayForSale = (forecasts: Array<any>, searchKey: string): any => {
    let bestDay = undefined;

    if (forecasts && forecasts.length > 0) {
        for (const item of forecasts) {
            if (item?.weather?.description?.includes(searchKey)) {
                bestDay = moment(item?.datetime).format('dddd');
                break;
            }
        }
    };

    return bestDay;
};