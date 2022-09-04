import { FC } from 'react';

// Helpers
import { calculateDayToDatetime, findWeatherPhotoName } from '../../../helpers/helperFunctions';

// Styles
import forecastClasses from "../../../styles/Forecast.module.css";

const FutureForecastItem: FC<{ item: any }> = ({ item }) => {
    return (
        <li>
            <img src={require(`../../../helpers/assets/${findWeatherPhotoName(item?.weather?.icon, item?.weather?.description)}`)} alt="icon" className="img-fluid" />
            <span className={forecastClasses.day}>{calculateDayToDatetime(item?.datetime)}</span>
            <span className={forecastClasses.temperature}>{Math.round(item?.temp)}°C</span>
            <span>{item?.weather?.description}</span>
        </li>
    )
}

export default FutureForecastItem;