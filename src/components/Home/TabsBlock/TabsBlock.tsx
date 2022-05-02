import React, { FC } from 'react';
import styles from './TabsBlock.module.scss';
import Triangles from '../../UI/icons/Triangles';
import Cross from '../../UI/icons/Cross';
import FifthGradient from '../../UI/Gradients/FifthGradient';
import Tabs from './Tabs/Tabs';

const TabsBlock: FC = (): JSX.Element => {
  return (
    <div className={styles.tabsBlock}>
      <FifthGradient className={styles.gradient}/>
      <div className={styles.tabsHeader}>
        <Triangles className={styles.triangles}/>
        <h2 className={styles.title}>The Service We Provide For You</h2>
        <Cross className={styles.cross}/>
      </div>
      <Tabs/>
      <Cross className={styles.mainCross}/>
    </div>
  );
};

export default TabsBlock;