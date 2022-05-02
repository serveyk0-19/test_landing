import React, { FC } from 'react';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import styles from './LogoBlock.module.scss';

const LogoBlock: FC = (): JSX.Element => {
  return (
    <CustomNavLink to={'/'} className={styles.logoWrap}>
      <img className={styles.logo} src={'./images/logo.png'} alt={'LOGO'}/>
      <h1 className={styles.title}>Enver</h1>
    </CustomNavLink>
  );
};

export default LogoBlock;