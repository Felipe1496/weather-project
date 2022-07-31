import { FC } from 'react';

import { useTemperature } from '@/hooks/useTemperature';
import { Switch } from '@headlessui/react';

const SwitchUnit: FC = () => {
  const { unit, setUnit } = useTemperature();

  return (
    <div className="flex w-20 items-center justify-between">
      <span className="text-sm md:text-[15px]">°F</span>
      <Switch
        checked={unit}
        onChange={setUnit}
        className={`${unit ? 'bg-tertiary-light' : 'bg-black bg-opacity-40'}
          relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          className={`${unit ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <span className="text-sm md:text-[15px]">C°</span>
    </div>
  );
};
export default SwitchUnit;
