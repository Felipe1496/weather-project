import { FC } from 'react';

interface Props {
  date: string[];
}

const FormatedDate: FC<Props> = ({ date }) => (
  <div>
    <span>{date}</span>
  </div>
);
export default FormatedDate;
