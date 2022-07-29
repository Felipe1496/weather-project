import { useContext } from 'react';

import { LanguageContext } from '@/contexts/LanguageContext';

export const useLanguage = () => {
  const value = useContext(LanguageContext);

  return value;
};
