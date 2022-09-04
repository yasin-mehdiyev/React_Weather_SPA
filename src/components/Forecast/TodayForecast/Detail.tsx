import { FC } from 'react';
import forecastClasses from "../../../styles/Forecast.module.css";

const TodayForecastDetail: FC = () => {
    return (
        <div className={forecastClasses.forecast_detail_up}>
            <ul>
                <li>
                    <span>Preditctability</span>
                    <span>75%</span>
                </li>
                <li>
                    <span>Humidity</span>
                    <span>72%</span>
                </li>
                <li>
                    <span>Wind</span>
                    <span>6 km/h</span>
                </li>
                <li>
                    <span>Air Pressure</span>
                    <span>1002.5 mb</span>
                </li>
                <li>
                    <span>Max Temp</span>
                    <span>17°C</span>
                </li>
                <li>
                    <span>Min Temp</span>
                    <span>8°C</span>
                </li>
            </ul>
        </div>
    )
}

export default TodayForecastDetail;