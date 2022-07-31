import { useContext } from 'react';

import { LocationContext } from '@/contexts/LocationContext';

export const useLocation = () => {
  const value = useContext(LocationContext);

  return value;
};
