import { FC } from 'react';

import Autocomplete from '@/components/common/AutoComplete/auto-complete';
import { useLanguage } from '@/hooks/useLanguage';

interface Props {
  // eslint-disable-next-line no-unused-vars
  setStep: (step: number) => void;
}

const SearchCity: FC<Props> = ({ setStep }) => {
  const { translatable } = useLanguage();

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl font-bold md:tracking-widest">{translatable().titles.time}</h1>
      <div className="h-3" />
      <Autocomplete setStep={setStep} />
    </div>
  );
};

export default SearchCity;
