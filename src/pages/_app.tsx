import type { AppProps } from 'next/app';
import { FC } from 'react';

import '../styles/globals.css';

import LanguageContextProvider from '@/contexts/LanguageContext';
import LocationContextProvider from '@/contexts/LocationContext';
import TemperatureContextProvider from '@/contexts/TemperatureContext';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <LanguageContextProvider>
    <LocationContextProvider>
      <TemperatureContextProvider>
        <Component {...pageProps} />
      </TemperatureContextProvider>
    </LocationContextProvider>
  </LanguageContextProvider>
);

export default MyApp;
