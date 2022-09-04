import React, { FC } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { CountryProps } from '../../models/types/Country';

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