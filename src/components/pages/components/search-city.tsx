import { FC } from 'react';

import { useLanguage } from '@/hooks/useLanguage';

const SearchCity: FC = () => {
  const { translatable } = useLanguage();

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-primary-light">{translatable().titles.time}</h1>
    </div>
  );
};

export default SearchCity;
