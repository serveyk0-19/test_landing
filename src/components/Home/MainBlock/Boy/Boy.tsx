import React, { FC } from 'react';
import styles from './Boy.module.scss';
import WhiteRectangle from '../../../UI/WhiteRectangle/WhiteRectangle';
import Mask from '../../../UI/icons/Mask';
import Circles from '../../../UI/icons/Circles';
import Zigzag from '../../../UI/icons/Zigzag';
import Triangles from '../../../UI/icons/Triangles';
import Cross from '../../../UI/icons/Cross';

const Boy: FC = (): JSX.Element => {
  return (
    <div className={styles.wrap}>

      <Circles className={styles.circles}/>
      <Zigzag className={styles.zigzag}/>
      <Triangles className={styles.triangles}/>
      <Cross className={styles.cross}/>

      <WhiteRectangle className={styles.firstRectangle}/>
      <WhiteRectangle className={styles.secondRectangle}>
        <div className={styles.maskWrap}>
          <Mask className={styles.mask}/>
        </div>
        <img className={styles.boy} src={'./images/boy.png'} alt={'boy'}/>
      </WhiteRectangle>
    </div>
  );
};

export default Boy;