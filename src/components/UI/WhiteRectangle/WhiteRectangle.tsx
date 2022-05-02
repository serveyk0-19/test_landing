import React, { FC, ReactNode } from 'react';
import styles from './WhiteRectangle.module.scss';
import cn from 'classnames';

interface Props {
  children?: ReactNode;
  className?: string;
}

const WhiteRectangle: FC<Props> = ({children, className}): JSX.Element => {
  return (
    <div className={cn(className, styles.whiteRectangle)}>
      {children}
    </div>
  );
};

export default WhiteRectangle;