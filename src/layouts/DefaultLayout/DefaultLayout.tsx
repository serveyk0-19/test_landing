import React, { FC, ReactNode } from 'react';
import styles from './DefaultLayout.module.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface Props {
  children: ReactNode
}

const DefaultLayout: FC<Props> = ({children}): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default DefaultLayout;