import { FC, useEffect } from 'react';

import { getImperialForecast, getMetricForecast } from '@/api/weather/weather';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocation } from '@/hooks/useLocation';
import { useTemperature } from '@/hooks/useTemperature';

import FormatedDate from '../../common/FormatedDate/FormatedDate';

interface Props {
  // eslint-disable-next-line no-unused-vars
  setStep: (step: number) => void;
}

const Forecast: FC<Props> = ({ setStep }) => {
  const { currentLocation } = useLocation();
  const { translatable, currentLanguageCode } = useLanguage();
  const { setMetricCurrentForecast, setImperialCurrentForecast, imperialCurrentForecast } = useTemperature();

  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const day1 = new Date();
  const day1Array = day1.toLocaleDateString('en-US', options).split(' ');
  const day2 = new Date();
  day2.setDate(day1.getDate() + 1);
  const day2Array = day2.toLocaleDateString('pt-BR', options).split(' ');
  const day3 = new Date();
  day3.setDate(day1.getDate() + 2);
  const day3Array = day3.toLocaleDateString('pt-BR', options).split(' ');
  const day4 = new Date();
  day4.setDate(day1.getDate() + 3);
  const day4Array = day4.toLocaleDateString('pt-BR', options).split(' ');
  const day5 = new Date();
  day5.setDate(day1.getDate() + 4);
  const day5Array = day5.toLocaleDateString('pt-BR', options).split(' ');
  console.log(day1Array, day2Array, day3Array, day4Array, day5Array);

  useEffect(() => {
    const getForecast = async () => {
      const metricForecast = await getMetricForecast(
        currentLocation.value.lat,
        currentLocation.value.lng,
        currentLanguageCode,
      );
      setMetricCurrentForecast(metricForecast);
      const imperialForecast = await getImperialForecast(
        currentLocation.value.lat,
        currentLocation.value.lng,
        currentLanguageCode,
      );
      setImperialCurrentForecast(imperialForecast);
    };
    getForecast();
  }, [currentLocation]);

  return (
    imperialCurrentForecast && (
      <div className="flex flex-col items-center text-center">
        <button type="button" className="absolute top-5 left-4 md:top-12 md:left-12" onClick={() => setStep(2)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="icons/right-arrow.svg" alt="back arrow" className="h-6 w-6 md:h-11 md:w-11" />
        </button>

        <h1 className="text-2xl font-bold md:text-3xl">{currentLocation.label}</h1>
        <span className="text-[14px] md:text-xl">{translatable().small.forecast}</span>

        <div>
          <FormatedDate date={day1Array} />
        </div>
      </div>
    )
  );
};

export default Forecast;
