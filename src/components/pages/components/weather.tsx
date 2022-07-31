import Image from 'next/image';
import { FC, useEffect } from 'react';

import { getImperialWeatherByLocation, getMetricWeatherByLocation } from '@/api/weather/weather';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocation } from '@/hooks/useLocation';
import { useTemperature } from '@/hooks/useTemperature';

interface Props {
  // eslint-disable-next-line no-unused-vars
  setStep: (step: number) => void;
}

const Weather: FC<Props> = ({ setStep }) => {
  const { currentLocation } = useLocation();
  const { translatable } = useLanguage();
  const {
    unit,
    metricCurrentTemperature,
    imperialCurrentTemperature,
    setImperialCurrentTemperature,
    setMetricCurrentTemperature,
  } = useTemperature();

  useEffect(() => {
    const getTemperature = async () => {
      const metricTemperature = await getMetricWeatherByLocation(currentLocation.value.lat, currentLocation.value.lng);
      setMetricCurrentTemperature(metricTemperature);
      const imperialTemperature = await getImperialWeatherByLocation(
        currentLocation.value.lat,
        currentLocation.value.lng,
      );
      setImperialCurrentTemperature(imperialTemperature);
    };
    getTemperature();
  }, [currentLocation]);

  return (
    imperialCurrentTemperature && (
      <div className="flex flex-col items-center">
        <button type="button" onClick={() => setStep(1)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="icons/right-arrow.svg"
            alt="back arrow"
            className="absolute top-12 left-12 h-6 w-6 md:h-11 md:w-11"
          />
        </button>
        <h1 className="text-2xl font-bold md:text-3xl md:tracking-widest">{currentLocation.label}</h1>

        <span className="capitalize md:text-xl">{metricCurrentTemperature.weather[0].description}</span>

        <div className="flex">
          <span className="text-[48px] md:text-4xl">
            {unit ? Math.round(metricCurrentTemperature.main.temp) : Math.round(imperialCurrentTemperature.main.temp)}°
          </span>
          <Image src="/icons/cloudIcon.png" className="border-2 border-red-500" width={75} height={32} alt="nuvem" />
        </div>

        <div className="flex">
          <div>
            <span className="text-xl font-bold">MAX: </span>
            <span className="text-xl">
              {unit
                ? Math.round(metricCurrentTemperature.main.temp_max)
                : Math.round(imperialCurrentTemperature.main.temp_max)}
              °
            </span>
          </div>
          <div>
            <span className="text-xl font-bold">MIN: </span>
            <span className="text-xl">
              {unit
                ? Math.round(metricCurrentTemperature.main.temp_min)
                : Math.round(imperialCurrentTemperature.main.temp_min)}
              °
            </span>
          </div>
        </div>

        <span className="text-sm underline">{translatable().small.forecast}</span>
      </div>
    )
  );
};
export default Weather;
