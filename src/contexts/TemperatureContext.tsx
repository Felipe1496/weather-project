import { createContext, FC, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export const TemperatureContext = createContext({} as any);

const TemperatureContextProvider: FC<Props> = ({ children }) => {
  const [unit, setUnit] = useState(false);
  const [metricCurrentTemperature, setMetricCurrentTemperature] = useState();
  const [imperialCurrentTemperature, setImperialCurrentTemperature] = useState();

  return (
    <TemperatureContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        metricCurrentTemperature,
        setMetricCurrentTemperature,
        imperialCurrentTemperature,
        setImperialCurrentTemperature,
        unit,
        setUnit,
      }}
    >
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureContextProvider;
