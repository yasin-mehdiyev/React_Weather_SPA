import React, { FC, useState } from 'react'
import Country from './HOC/Country';
import Region from './HOC/Region';
import classes from "../styles/Select.module.css";
import Button from './HOC/Button';

const WeatherForm: FC = () => {
    const [country, setCountry] = useState<string>("");
    const [region, setRegion] = useState<string>("");

    const selectCountry = (val: string) => {
        setCountry(val);
    };

    const selectRegion = (val: string) => {
        setRegion(val);
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        console.log('country: ', country);
        console.log('region: ', region);
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