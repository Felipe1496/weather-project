import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import { HTMLButtonProps } from '@/types/html';

import { ButtonVariant } from './types';

interface Props extends HTMLButtonProps {
  variant: ButtonVariant;
  children: ReactNode;
}

const Button: FC<Props> = ({ variant, className, children, ...rest }) => (
  // eslint-disable-next-line react/button-has-type
  <button {...rest} className={clsx(className, variant === 'language' && 'flex')}>
    {children}
  </button>
);

export default Button;
