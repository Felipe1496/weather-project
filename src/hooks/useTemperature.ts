import { useContext } from 'react';

import { TemperatureContext } from '@/contexts/TemperatureContext';

export const useTemperature = () => {
  const value = useContext(TemperatureContext);

  return value;
};
