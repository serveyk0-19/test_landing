import React, { FC, ReactNode } from 'react';
import styles from './DefaultButton.module.scss';
import cn from 'classnames';

interface Props {
  className?: string,
  children: ReactNode
}

const DefaultButton: FC<Props> = ({className, children}): JSX.Element => {
  return (
    <button className={cn(className, styles.button)}>
      {children}
    </button>
  );
};

export default DefaultButton;