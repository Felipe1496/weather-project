import { Language } from '@/translations/types';

export type CurrenLanguageCode = 'pt_BR' | 'en' | 'es';

export interface LanguageContextProps {
  // eslint-disable-next-line no-unused-vars
  handleChangeLanguage: (lang: string) => void;
  translatable: () => Language;
  currentLanguage: string;
  currentLanguageCode: string;
  // eslint-disable-next-line no-unused-vars
  setCurrentLanguageCode: (lang: CurrenLanguageCode) => void;
}

export type CurrentLanguage = 'Português' | 'English' | 'Español';
