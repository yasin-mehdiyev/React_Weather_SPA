import { FC } from 'react'
import { ChildrenProps } from '../../models/types/Common';
import forecastClasses from "../../styles/Forecast.module.css";

const ForecastWrapper: FC<ChildrenProps> = ({ children }) => {
    return (
        <div className={forecastClasses.forecast_right_side}>
            <div className={forecastClasses.forecast_right_wrapper}>
                {children}
            </div>
        </div>
    )
}

export default ForecastWrapper;