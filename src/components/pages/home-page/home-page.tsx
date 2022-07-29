import { FC } from 'react';

import Page from '@/components/common/page/page';

import SearchCity from '../components/search-city';
import SelectLanguage from '../components/select-language';
import { PAGE_TITLE } from './constans';

const HomePage: FC = () => (
  <Page title={PAGE_TITLE}>
    <div
      className="flex h-screen w-screen flex-col items-center justify-center bg-cover bg-bottom bg-no-repeat px-5"
      style={{ backgroundImage: "url('images/sky.png')" }}
    >
      <SearchCity />
      <div className="absolute bottom-4">
        <SelectLanguage />
      </div>
    </div>
  </Page>
);
export default HomePage;
