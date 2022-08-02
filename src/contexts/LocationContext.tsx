import { createContext, FC, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const LocationContext = createContext({} as any);

const LOCATION_INITIAL_VALUE = {
  value: { lat: '', lng: '' },
  label: '',
};

const LocationContextProvider: FC<Props> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(LOCATION_INITIAL_VALUE);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LocationContext.Provider value={{ setCurrentLocation, currentLocation }}>{children}</LocationContext.Provider>
  );
};

export default LocationContextProvider;
