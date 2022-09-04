import { FC } from 'react';

// Moment Library
import moment from 'moment';

// Styles
import forecastClasses from "../../../styles/Forecast.module.css";

const TodayForecast: FC<{ forecasts: any }> = ({ forecasts }) => {
    return (
        <div className={forecastClasses.today_forecast}>
            <div className={forecastClasses.overlay}>
                <div className={forecastClasses.today_forecast_wrapper}>

                    <div className={forecastClasses.today_forecast_wrapper_up}>
                        <h3>{moment(forecasts?.data[0]?.datetime).format('dddd')}</h3>
                        <p className={forecastClasses.date}>{moment(forecasts?.data[0]?.datetime).format("LL")}</p>
                        <p className={forecastClasses.location}>
                            <img src={require("../../../helpers/assets/location-pin.png")} alt="location" />
                            <span>{forecasts?.city_name}, {forecasts?.country_code}</span>
                        </p>
                    </div>

                    <div className={forecastClasses.today_forecast_wrapper_down}>
                        <h3>{Math.round(forecasts?.data[0]?.temp)}°C</h3>
                        <p>{forecasts?.data[0]?.weather?.description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TodayForecast;