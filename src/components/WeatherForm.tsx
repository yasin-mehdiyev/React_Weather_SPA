import { FC, useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { fetchForecasts } from '../redux/features/forecast/forecastAction';

// Components
import Country from './HOC/Country';
import Region from './HOC/Region';
import Button from './HOC/Button';

// Styles
import classes from "../styles/Select.module.css";

const WeatherForm: FC = () => {
    const dispatch = useDispatch<any>();
    const [country, setCountry] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    const selectCountry = (val: string) => {
        setCountry(val);
    };

    const selectRegion = (val: string) => {
        setRegion(val);
    };

    const handleSearch = async (e: any) => {
        e.preventDefault();
        dispatch(fetchForecasts(region));
        setCountry("");
        setRegion("");
    }

    return (
        <>
            <Country country={country} selectedCountry={selectCountry} className={classes.select} />

            {
                country !== "" ? (
                    <Region country={country} region={region} selectedRegion={selectRegion} className={classes.select} />
                ) : null
            }

            <Button content="Search" onClick={handleSearch} disabled={region !== "" ? false : true} />

        </>
    )
}

export default WeatherForm;