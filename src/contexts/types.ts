import { Language } from '@/translations/types';

export interface LanguageContextProps {
  // eslint-disable-next-line no-unused-vars
  handleChangeLanguage: (lang: string) => void;
  translatable: () => Language;
  currentLanguage: string;
}

export type CurrentLanguage = 'Português' | 'English' | 'Español';
