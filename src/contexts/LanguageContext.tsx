import { useRouter } from 'next/router';
import { createContext, FC, ReactNode } from 'react';

import { messages } from '@/translations/languages';
import { Language } from '@/translations/types';

interface Props {
  children: ReactNode;
}

interface LanguageContextProps {
  // eslint-disable-next-line no-unused-vars
  handleChangeLanguage: (lang: string) => void;
  translatable: Language;
}

export const LanguageContext = createContext({} as LanguageContextProps);

const LanguageContextProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { locale } = router;

  const translatable = locale === 'pt-BR' ? messages.pt : messages.en;

  const handleChangeLanguage = (lang: string) => {
    router.push('/', '/', { locale: lang });
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <LanguageContext.Provider value={{ handleChangeLanguage, translatable }}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
