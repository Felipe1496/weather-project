import { FC, useState } from 'react';

import Page from '@/components/common/page/page';

import Forecast from '../components/forecast';
import SearchCity from '../components/search-city';
import SelectLanguage from '../components/select-language';
import SwitchUnit from '../components/switch-unit';
import Weather from '../components/weather';
import { PAGE_TITLE } from './constans';

const HomePage: FC = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <Page title={PAGE_TITLE}>
      <div
        className="relative flex h-screen w-screen flex-col items-center justify-center bg-cover bg-bottom bg-no-repeat px-5"
        style={{ backgroundImage: "url('images/sky.png')" }}
      >
        <div className="absolute top-5 right-5 md:right-12 md:top-12">
          <SwitchUnit />
        </div>

        <div>
          {/* eslint-disable-next-line no-nested-ternary */}
          {step === 1 ? (
            <SearchCity setStep={setStep} />
          ) : step === 2 ? (
            <Weather setStep={setStep} />
          ) : (
            <Forecast setStep={setStep} />
          )}
        </div>
        <div className="absolute bottom-4">
          <SelectLanguage />
        </div>
      </div>
    </Page>
  );
};
export default HomePage;
