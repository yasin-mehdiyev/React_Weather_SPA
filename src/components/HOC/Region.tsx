import React, { FC } from 'react';
import { RegionDropdown } from 'react-country-region-selector';
import { RegionProps } from '../../models/types/Region';

const Region: FC<RegionProps> = ({ country, region, selectedRegion, className }) => {
    return (
        <>
            <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectedRegion(val)}
                classes={className}
            />
        </>
    )
}

export default Region;