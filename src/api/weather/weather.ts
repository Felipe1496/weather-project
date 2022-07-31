import axios, { AxiosError } from 'axios';

import { API_KEY, BASE_URL } from './constants';

export const getMetricWeatherByLocation = async (lat: string, lon: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    console.log(data);

    return data;
  } catch (error) {
    if (!(error instanceof AxiosError)) throw error;
    return null;
  }
};

export const getImperialWeatherByLocation = async (lat: string, lon: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`);
    console.log(data);
    return data;
  } catch (error) {
    if (!(error instanceof AxiosError)) throw error;
    return null;
  }
};
