import { FC } from 'react';

// Models (Types)
import { CountryProps } from '../../models/types/Country';

// Country_Region_Library
import { CountryDropdown } from 'react-country-region-selector';

const Country: FC<CountryProps> = ({ country, selectedCountry, className }) => {
  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => selectedCountry(val)}
        classes={className}
      />
    </>
  )
}

export default Country;