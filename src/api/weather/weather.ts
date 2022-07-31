import axios, { AxiosError } from 'axios';

import { API_KEY, BASE_URL, FORECAST_URL } from './constants';

export const getMetricWeatherByLocation = async (lat: string, lon: string, lang: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`);
    console.log('getMetricWeatherByLocation', data);
    return data;
  } catch (error) {
    if (!(error instanceof AxiosError)) throw error;
    return null;
  }
};

export const getImperialWeatherByLocation = async (lat: string, lon: string, lang: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial&lang=${lang}`);
    console.log('getImperialWeatherByLocation', data);
    return data;
  } catch (error) {
    if (!(error instanceof AxiosError)) throw error;
    return null;
  }
};

export const getMetricForecast = async (lat: string, lon: string, lang: string) => {
  try {
    const { data } = await axios.get(
      `${FORECAST_URL}lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=metric&lang=${lang}`,
    );

    console.log('getMetricForecast', data);

    return data;
  } catch (error) {
    if (!(error instanceof AxiosError)) throw error;
    return null;
  }
};

export const getImperialForecast = async (lat: string, lon: string, lang: string) => {
  try {
    const { data } = await axios.get(
      `${FORECAST_URL}lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=imperial&lang=${lang}`,
    );

    console.log('getMetricForecast', data);

    return data;
  } catch (error) {
    if (!(error instanceof AxiosError)) throw error;
    return null;
  }
};
