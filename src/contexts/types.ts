/* eslint-disable no-unused-vars */
import { Language } from '@/translations/types';

export type CurrenLanguageCode = 'pt_BR' | 'en' | 'es';

export type CurrentLanguage = 'Português' | 'English' | 'Español';

export type CurrentSimplifiedLanguageCode = 'pt' | 'en' | 'es';
export interface LanguageContextProps {
  handleChangeLanguage: (lang: string) => void;
  translatable: () => Language;
  currentLanguage: string;
  currentLanguageCode: string;
  setCurrentLanguageCode: (lang: CurrenLanguageCode) => void;
  currentSimplifiedLanguageCode: CurrentSimplifiedLanguageCode;
  setCurrentSimplifiedLanguageCode: (languageSimplifiedCode: CurrentSimplifiedLanguageCode) => void;
}
