import { FC } from 'react';

// Styles
import forecastClasses from "../../../styles/Forecast.module.css";

const TodayForecastDetail: FC<{ forecasts: any }> = ({ forecasts }) => {
    return (
        <div className={forecastClasses.forecast_detail_up}>
            <ul>
                <li>
                    <span>Wind</span>
                    <span>{forecasts?.data[0]?.wind_spd} km/h</span>
                </li>
                <li>
                    <span>Air Pressure</span>
                    <span>{forecasts?.data[0]?.pres} mb</span>
                </li>
                <li>
                    <span>Max Temp</span>
                    <span>{Math.round(forecasts?.data[0]?.max_temp)}°C</span>
                </li>
                <li>
                    <span>Min Temp</span>
                    <span>{Math.round(forecasts?.data[0]?.min_temp)}°C</span>
                </li>
            </ul>
        </div>
    )
}

export default TodayForecastDetail;