import Image from 'next/image';
import { FC } from 'react';

import Button from '@/components/common/Button/button';
import { EN_US, ES_ES, PT_BR } from '@/contexts/constants';
import { useLanguage } from '@/hooks/useLanguage';

const SelectLanguage: FC = () => {
  const { handleChangeLanguage, currentLanguage, translatable } = useLanguage();
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-20 justify-between">
        <Button variant="language" type="button" onClick={() => handleChangeLanguage(PT_BR)}>
          <Image src="/icons/languageIcons/brazil.svg" width={20} height={20} alt="" />
        </Button>
        <Button variant="language" type="button" onClick={() => handleChangeLanguage(EN_US)}>
          <Image src="/icons/languageIcons/united-states.svg" width={20} height={20} alt="" />
        </Button>
        <Button variant="language" type="button" onClick={() => handleChangeLanguage(ES_ES)}>
          <Image src="/icons/languageIcons/spain.svg" width={20} height={20} alt="" />
        </Button>
      </div>
      <span className="text-center text-xs">
        {translatable().small.currentLanguage}: {currentLanguage}
      </span>
    </div>
  );
};

export default SelectLanguage;
