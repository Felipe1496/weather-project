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
  const { translatable, currentLanguageCode, currentSimplifiedLanguageCode } = useLanguage();
  const { setMetricCurrentForecast, setImperialCurrentForecast, imperialCurrentForecast, metricCurrentForecast, unit } =
    useTemperature();

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

  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const today = new Date();

  const day1 = new Date();
  day1.setDate(today.getDate() + 1);
  const day1Array = day1.toLocaleDateString(currentSimplifiedLanguageCode, options).split(' ');
  const day2 = new Date();
  day2.setDate(day1.getDate() + 2);
  const day2Array = day2.toLocaleDateString(currentSimplifiedLanguageCode, options).split(' ');
  const day3 = new Date();
  day3.setDate(day1.getDate() + 3);
  const day3Array = day3.toLocaleDateString(currentSimplifiedLanguageCode, options).split(' ');
  const day4 = new Date();
  day4.setDate(day1.getDate() + 4);
  const day4Array = day4.toLocaleDateString(currentSimplifiedLanguageCode, options).split(' ');
  const day5 = new Date();
  day5.setDate(day1.getDate() + 5);
  const day5Array = day5.toLocaleDateString(currentSimplifiedLanguageCode, options).split(' ');

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
          <div className="flex items-center">
            <FormatedDate date={day1Array} />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[0].main.temp_min)
                : Math.round(imperialCurrentForecast.list[0].main.temp_min)}
              °
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-temperature-cold to-temperature-hot" />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[0].main.temp_max)
                : Math.round(imperialCurrentForecast.list[0].main.temp_max)}
              °
            </span>
            <span className="hidden md:flex">{metricCurrentForecast.list[0].weather[0].description}</span>
          </div>

          <div className="flex items-center">
            <FormatedDate date={day2Array} />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[1].main.temp_min)
                : Math.round(imperialCurrentForecast.list[1].main.temp_min)}
              °
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-temperature-cold to-temperature-hot" />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[1].main.temp_max)
                : Math.round(imperialCurrentForecast.list[1].main.temp_max)}
              °
            </span>
            <span className="hidden md:flex">{metricCurrentForecast.list[1].weather[0].description}</span>
          </div>

          <div className="flex items-center">
            <FormatedDate date={day3Array} />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[2].main.temp_min)
                : Math.round(imperialCurrentForecast.list[2].main.temp_min)}
              °
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-temperature-cold to-temperature-hot" />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[2].main.temp_max)
                : Math.round(imperialCurrentForecast.list[2].main.temp_max)}
              °
            </span>
            <span className="hidden md:flex">{metricCurrentForecast.list[2].weather[0].description}</span>
          </div>

          <div className="flex items-center">
            <FormatedDate date={day4Array} />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[3].main.temp_min)
                : Math.round(imperialCurrentForecast.list[3].main.temp_min)}
              °
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-temperature-cold to-temperature-hot" />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[3].main.temp_max)
                : Math.round(imperialCurrentForecast.list[3].main.temp_max)}
              °
            </span>
            <span className="hidden md:flex">{metricCurrentForecast.list[3].weather[0].description}</span>
          </div>

          <div className="flex items-center">
            <FormatedDate date={day5Array} />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[4].main.temp_min)
                : Math.round(imperialCurrentForecast.list[4].main.temp_min)}
              °
            </span>
            <div className="h-1 w-24 bg-gradient-to-r from-temperature-cold to-temperature-hot" />
            <span>
              {unit
                ? Math.round(metricCurrentForecast.list[4].main.temp_max)
                : Math.round(imperialCurrentForecast.list[4].main.temp_max)}
              °
            </span>
            <span className="hidden md:flex">{metricCurrentForecast.list[4].weather[0].description}</span>
          </div>
        </div>
      </div>
    )
  );
};

export default Forecast;
