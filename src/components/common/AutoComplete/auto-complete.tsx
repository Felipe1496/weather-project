/* eslint-disable arrow-body-style */
import { FC, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { geoApiOptions, GEO_API_URL } from '@/api/GeoDB-Cities/geo-db';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocation } from '@/hooks/useLocation';

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: '#6AA2D1',
    ':hover': {
      color: '#D2B3C1',
    },
    background: 'transparent',
    cursor: 'pointer',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  menu: (provided: any) => ({
    ...provided,
    margin: '0px',
    boxShadow: '0px 4px 4px rgba(106, 162, 209, 0.8)',
    borderRadius: '0px 0px 10px 10px',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    borderRadius: state.isFocused ? '10px 10px 0px 0px' : '10px',
  }),
  input: (base: any) => ({
    ...base,
    color: '#6AA2D1',
  }),
};

interface Props {
  // eslint-disable-next-line no-unused-vars
  setStep: (step: number) => void;
}

const Autocomplete: FC<Props> = ({ setStep }) => {
  const [search, setSearch] = useState();
  const { setCurrentLocation } = useLocation();
  const { translatable } = useLanguage();

  const loadOptions = async (inputValue: any) => {
    const response = await fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions);
    const response1 = await response.json();
    return {
      options: response1.data.map((city: any) => {
        return {
          value: { lat: `${city.latitude}`, lng: `${city.longitude}` },
          label: `${city.name}`,
        };
      }),
    };
  };
  const handleOnChange = (searchData: any) => {
    setSearch(searchData);
    setStep(2);
    setCurrentLocation(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        instanceId="postType"
        placeholder={<div className="text-secondary-dark">{translatable().placeholder.city}</div>}
        debounceTimeout={1001}
        value={search}
        onChange={handleOnChange}
        styles={customStyles}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Autocomplete;
