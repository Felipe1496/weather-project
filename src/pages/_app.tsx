import type { AppProps } from 'next/app';
import { FC } from 'react';

import '../styles/globals.css';

import LanguageContextProvider from '@/contexts/LanguageContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <LanguageContextProvider>
    <Component {...pageProps} />
  </LanguageContextProvider>
);

export default MyApp;
