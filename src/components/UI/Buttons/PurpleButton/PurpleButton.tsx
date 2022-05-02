import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './PurpleButton.module.scss';

interface Props {
  className?: string,
  children: ReactNode
}

const PurpleButton: FC<Props> = ({className, children}): JSX.Element => {
  return (
    <button className={cn(className, styles.button)}>
      {children}
    </button>
  );
};

export default PurpleButton;