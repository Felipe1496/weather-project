import Image from 'next/image';
import { FC } from 'react';

import {
  getMetricWeatherByLocation,
  getImperialWeatherByLocation,
  getMetricForecast,
  getImperialForecast,
} from '@/api/weather/weather';
import Button from '@/components/common/Button/button';
import { EN_US, ES_ES, PT_BR } from '@/contexts/constants';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocation } from '@/hooks/useLocation';
import { useTemperature } from '@/hooks/useTemperature';

const SelectLanguage: FC = () => {
  const {
    handleChangeLanguage,
    currentLanguage,
    translatable,
    setCurrentLanguageCode,
    setCurrentSimplifiedLanguageCode,
  } = useLanguage();
  const { currentLocation } = useLocation();
  const {
    setMetricCurrentTemperature,
    setImperialCurrentTemperature,
    setMetricCurrentForecast,
    setImperialCurrentForecast,
  } = useTemperature();

  const handleSwitchAPIinterfaceInfos = async (lang: string) => {
    const newMetricCurrentTemperature = await getMetricWeatherByLocation(
      currentLocation.value.lat,
      currentLocation.value.lng,
      lang,
    );
    setMetricCurrentTemperature(newMetricCurrentTemperature);
    const newImperialCurrentTemperature = await getImperialWeatherByLocation(
      currentLocation.value.lat,
      currentLocation.value.lng,
      lang,
    );
    setImperialCurrentTemperature(newImperialCurrentTemperature);

    const newMetricForecast = await getMetricForecast(currentLocation.value.lat, currentLocation.value.lng, lang);
    setMetricCurrentForecast(newMetricForecast);
    const newImperialForecast = await getImperialForecast(currentLocation.value.lat, currentLocation.value.lng, lang);
    setImperialCurrentForecast(newImperialForecast);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-20 justify-between">
        <Button
          variant="language"
          type="button"
          onClick={() => {
            handleChangeLanguage(PT_BR);
            handleSwitchAPIinterfaceInfos('pt_BR');
            setCurrentLanguageCode('pt_BR');
            setCurrentSimplifiedLanguageCode('pt');
          }}
        >
          <Image src="/icons/languageIcons/brazil.svg" width={20} height={20} alt="" />
        </Button>
        <Button
          variant="language"
          type="button"
          onClick={() => {
            handleChangeLanguage(EN_US);
            handleSwitchAPIinterfaceInfos('en');
            setCurrentLanguageCode('en');
            setCurrentSimplifiedLanguageCode('en');
          }}
        >
          <Image src="/icons/languageIcons/united-states.svg" width={20} height={20} alt="" />
        </Button>
        <Button
          variant="language"
          type="button"
          onClick={() => {
            handleChangeLanguage(ES_ES);
            handleSwitchAPIinterfaceInfos('es');
            setCurrentLanguageCode('es');
            setCurrentSimplifiedLanguageCode('es');
          }}
        >
          <Image src="/icons/languageIcons/spain.svg" width={20} height={20} alt="" />
        </Button>
      </div>
      <span className="text-center text-xs">
        {translatable().small.currentLanguage}: {currentLanguage}
      </span>
    </div>
  );
};

export default SelectLanguage;
