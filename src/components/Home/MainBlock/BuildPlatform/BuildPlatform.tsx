import React, { FC } from 'react';
import styles from './BuildPlatform.module.scss';
import PurpleButton from '../../../UI/Buttons/PurpleButton/PurpleButton';
import Arrow from '../../../UI/icons/Arrow';

const BuildPlatform: FC = (): JSX.Element => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Build Your Awesome Platform</h1>
      <p className={styles.description}>Enver studio is a digital studio that offers several services
        {/*<br/>*/}
        such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
      <PurpleButton className={styles.servicesButton}>
        <div className={styles.buttonTextWrap}>
          <p>Our Services</p>
          <Arrow/>
        </div>
      </PurpleButton>
    </div>
  );
};

export default BuildPlatform;