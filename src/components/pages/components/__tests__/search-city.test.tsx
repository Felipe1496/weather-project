import LanguageContextProvider from '@/contexts/LanguageContext';
import { render } from '@testing-library/react';

import SearchCity from '../search-city';

describe('SearchCity', () => {
  it('should render title correctly', () => {
    const { getByTestId } = render(
      <LanguageContextProvider>
        <SearchCity setStep={() => null} />
      </LanguageContextProvider>,
    );

    expect(getByTestId('weatherTitle')).toBeTruthy();
  });
});
