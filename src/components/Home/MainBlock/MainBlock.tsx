import React, { FC } from 'react';
import styles from './MainBlock.module.scss';
import BuildPlatform from './BuildPlatform/BuildPlatform';
import Boy from './Boy/Boy';
import Circles from '../../UI/icons/Circles';
import Zigzag from '../../UI/icons/Zigzag';
import Triangles from '../../UI/icons/Triangles';
import Cross from '../../UI/icons/Cross';
import FirstGradientBlock from '../../UI/Gradients/FirstGradientBlock';
import SecondGradientBlock from '../../UI/Gradients/SecondGradientBlock';
import ThirdGradient from '../../UI/Gradients/ThirdGradient';
import FourthGradientBlock from '../../UI/Gradients/FourthGradientBlock';

const MainBlock: FC = (): JSX.Element => {
  return (
    <div className={styles.mainBlock}>
      <FirstGradientBlock className={styles.firstGradient}/>
      <SecondGradientBlock className={styles.secondGradient}/>
      <ThirdGradient className={styles.thirdGradient}/>
      <FourthGradientBlock className={styles.fourthGradient}/>
      <div className={styles.buildPlatformWrap}>
        <BuildPlatform/>
      </div>
      <div className={styles.boyWrap}>
        <Boy/>
      </div>
    </div>
  );
};

export default MainBlock;