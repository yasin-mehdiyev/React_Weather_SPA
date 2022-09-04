import { FC } from 'react';

// Components
import FutureForecastItem from './Item';

// Styles
import forecastClasses from "../../../styles/Forecast.module.css";

const FutureForecastList: FC<{ forecasts: any }> = ({ forecasts }) => {

    const futureFiveForecasts: Array<any> = (forecasts?.data && forecasts?.data.length) ? (
        forecasts?.data.slice(1, 6)
    ) : [];

    return (
        <div className={forecastClasses.future_forecast_down}>
            <ul>
                {
                    futureFiveForecasts.length > 0 ? (
                        futureFiveForecasts.map((item, index) => (
                            <FutureForecastItem key={index} item={item} />
                        ))
                    ) : null
                }
            </ul>
        </div>
    )
}

export default FutureForecastList;