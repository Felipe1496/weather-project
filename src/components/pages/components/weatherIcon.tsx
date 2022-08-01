import { FC } from 'react';

interface Props {
  weatherDescription: string;
}

const WeatherIcon: FC<Props> = ({ weatherDescription }) => {
  switch (weatherDescription) {
    case 'céu limpo':
    case 'clear sky':
    case 'cielo claro':
      return <img src="icons/cleanSky.png" alt="clean sky" />;

    case 'nuvens dispersas':
    case 'scattered clouds':
    case 'nubes dispersas':
      return <img src="icons/scatteredClouds.png" alt="scattered clouds" />;

    case 'algumas nuvens':
    case 'few clouds':
    case 'algo de nubes':
    case 'nublado':
    case 'overcast clouds':
    case 'nubes':
    case 'broken clouds':
    case 'muy nuboso':
      return <img src="icons/someClouds.png" alt="some clouds" />;

    case 'chuva forte':
    case 'chuva leve':
    case 'light rain':
    case 'lluvia ligera':
    case 'chuva moderada':
    case 'moderate rain':
    case 'lluvia moderada':
      return <img src="icons/heavyRain.png" alt="heavy rain" />;
    default:
      return null;
  }
};

export default WeatherIcon;
