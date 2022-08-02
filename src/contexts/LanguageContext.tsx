import { useRouter } from 'next/router';
import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { messages } from '@/translations/languages';

import { ENGLISH, EN_US, ES_ES, PORTUGUESE, SPANISH } from './constants';
import { CurrenLanguageCode, CurrentLanguage, CurrentSimplifiedLanguageCode, LanguageContextProps } from './types';

interface Props {
  children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextProps);

const LanguageContextProvider: FC<Props> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<CurrentLanguage>('Português');
  const [currentLanguageCode, setCurrentLanguageCode] = useState<CurrenLanguageCode>('pt_BR');
  const [currentSimplifiedLanguageCode, setCurrentSimplifiedLanguageCode] =
    useState<CurrentSimplifiedLanguageCode>('pt');
  const router = useRouter() || { router: { locale: '' } };
  const { locale } = router;

  useEffect(() => {
    switch (locale) {
      case 'en-US':
        setCurrentLanguage(ENGLISH);
        break;
      case 'es-ES':
        setCurrentLanguage(SPANISH);
        break;
      default:
        setCurrentLanguage(PORTUGUESE);
        break;
    }
  }, [locale]);

  const translatable = () => {
    switch (locale) {
      case EN_US:
        return messages.en;
      case ES_ES:
        return messages.es;
      default:
        return messages.pt;
    }
  };

  const handleChangeLanguage = (language: string) => {
    router.push('/', '/', { locale: language });
  };

  return (
    <LanguageContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        handleChangeLanguage,
        translatable,
        currentLanguage,
        currentLanguageCode,
        setCurrentLanguageCode,
        currentSimplifiedLanguageCode,
        setCurrentSimplifiedLanguageCode,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
