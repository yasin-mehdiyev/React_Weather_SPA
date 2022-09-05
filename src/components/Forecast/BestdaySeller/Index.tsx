import { FC } from 'react';
import bestdayClasses from "../../../styles/Bestday.module.css";
import { bestDayForSale } from '../../../helpers/helperFunctions';

const BestdaySeller: FC<{ forecasts: any }> = ({ forecasts }) => {
    return (
        <div className="col-12">
            <h2 className={bestdayClasses.title}>The result for next 5 days</h2>
            <ul className={bestdayClasses.best_day}>
                <li>
                    <span className={bestdayClasses.content}>Best day to sell an umbrella: </span>
                    <span className={bestdayClasses.day}>{bestDayForSale(forecasts?.data?.slice(1, 6), "rain") || "None"}</span>
                </li>
                <li>
                    <span className={bestdayClasses.content}>Best day to sell a jacket: </span>
                    <span className={bestdayClasses.day}>{bestDayForSale(forecasts?.data?.slice(1, 6), "clouds") || "None"}</span>
                </li>
            </ul>
        </div>
    )
}

export default BestdaySeller;