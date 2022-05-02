import React, { FC, ReactNode } from 'react';
import styles from './OneTab.module.scss';

interface Props {
  icon: ReactNode,
  title: string,
  description: string
}

const OneTab: FC<Props> = ({icon, title, description}): JSX.Element => {
  return (
    <div className={styles.oneTab}>
      {icon}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default OneTab;