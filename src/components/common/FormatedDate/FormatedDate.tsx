import { FC } from 'react';

import { useLanguage } from '@/hooks/useLanguage';
import { HTMLAttributesProps } from '@/types/html';

interface Props extends HTMLAttributesProps {
  date: string[];
}

const FormatedDate: FC<Props> = ({ date, className }) => {
  const { currentSimplifiedLanguageCode } = useLanguage();

  switch (currentSimplifiedLanguageCode) {
    case 'en':
      return (
        <div className={className}>
          <span className="text-sm font-bold capitalize md:text-xl">
            {date[0].slice(0, 3)}, {date[2]} {date[1]}
          </span>
        </div>
      );
    case 'es':
      return (
        <div className={className}>
          <span className="text-sm font-bold capitalize md:text-xl">
            {date[0].slice(0, 3)}, {date[1]} {date[2]}
          </span>
        </div>
      );

    default:
      return (
        <div className={className}>
          <span className="text-sm font-bold capitalize md:text-xl">{`${date[0].slice(0, 3)}, ${
            date[1]
          } ${date[3].slice(0, 3)}`}</span>
        </div>
      );
  }
};
export default FormatedDate;
