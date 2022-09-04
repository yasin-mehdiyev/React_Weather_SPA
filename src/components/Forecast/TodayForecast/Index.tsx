import { FC } from 'react';
import forecastClasses from "../../../styles/Forecast.module.css";

const TodayForecast: FC = () => {
    return (
        <div className={forecastClasses.today_forecast}>
            <div className={forecastClasses.overlay}>
                <div className={forecastClasses.today_forecast_wrapper}>

                    <div className={forecastClasses.today_forecast_wrapper_up}>
                        <h3>Sunday</h3>
                        <p className={forecastClasses.date}>May 16th</p>
                        <p className={forecastClasses.location}>
                            <img src={require("../../../helpers/assets/location-pin.png")} alt="location" />
                            <span>Berlin, DEU</span>
                        </p>
                    </div>

                    <div className={forecastClasses.today_forecast_wrapper_down}>
                        <h3>15°C</h3>
                        <p>Light Rain</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TodayForecast;