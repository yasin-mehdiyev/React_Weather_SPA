import { FC } from 'react';
import forecastClasses from "../../../styles/Forecast.module.css";

const FutureForecast: FC = () => {
    return (
        <div className={forecastClasses.future_forecast_down}>
            <ul>
                <li>
                    <img src={require("../../../helpers/assets/rainy.png")} alt="icon" className="img-fluid" />
                    <span className={forecastClasses.day}>Fri</span>
                    <span className={forecastClasses.temperature}>15°C</span>
                </li>
                <li>
                    <img src={require("../../../helpers/assets/rainy.png")} alt="icon" className="img-fluid" />
                    <span className={forecastClasses.day}>Fri</span>
                    <span className={forecastClasses.temperature}>15°C</span>
                </li>
                <li>
                    <img src={require("../../../helpers/assets/rainy.png")} alt="icon" className="img-fluid" />
                    <span className={forecastClasses.day}>Fri</span>
                    <span className={forecastClasses.temperature}>15°C</span>
                </li>
                <li>
                    <img src={require("../../../helpers/assets/rainy.png")} alt="icon" className="img-fluid" />
                    <span className={forecastClasses.day}>Fri</span>
                    <span className={forecastClasses.temperature}>15°C</span>
                </li>
                <li>
                    <img src={require("../../../helpers/assets/rainy.png")} alt="icon" className="img-fluid" />
                    <span className={forecastClasses.day}>Fri</span>
                    <span className={forecastClasses.temperature}>15°C</span>
                </li>
            </ul>
        </div>
    )
}

export default FutureForecast;