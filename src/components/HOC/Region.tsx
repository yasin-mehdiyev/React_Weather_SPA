import { FC } from 'react';

// Models (Types)
import { RegionProps } from '../../models/types/Region';

// Country_Region_Library
import { RegionDropdown } from 'react-country-region-selector';

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