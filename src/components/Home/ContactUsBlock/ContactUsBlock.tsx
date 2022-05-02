import React, { FC } from 'react';
import styles from './ContactUsBlock.module.scss';
import Cross from '../../UI/icons/Cross';
import Circles from '../../UI/icons/Circles';
import PurpleButton from '../../UI/Buttons/PurpleButton/PurpleButton';

const ContactUsBlock: FC = (): JSX.Element => {
  return (
    <div className={styles.contactUs}>
      <Cross className={styles.cross}/>
      <Circles className={styles.circles}/>
      <div className={styles.shadowBg}/>
      <div className={styles.content}>
        <h2 className={styles.title}>Contact us for the service you want to use</h2>
        <PurpleButton>
          Contact us
        </PurpleButton>
      </div>
    </div>
  );
};

export default ContactUsBlock;