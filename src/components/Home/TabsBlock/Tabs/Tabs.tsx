import React, { FC, ReactNode } from 'react';
import styles from './Tabs.module.scss';
import IconDevelopment from '../../../UI/icons/IconDevelopment';
import IconUiUx from '../../../UI/icons/IconUiUx';
import IconMotionGraphik from '../../../UI/icons/IconMotionGraphik';
import IconPhotography from '../../../UI/icons/IconPhotography';
import IconVideography from '../../../UI/icons/IconVideography';
import OneTab from '../OneTab/OneTab';
import IconGraphikDesigner from '../../../UI/icons/IconGraphikDesigner';

interface ITab {
  icon: ReactNode,
  title: string,
  description: string
}

const MOCK: Array<ITab> = [
  {
    icon: <IconDevelopment/>,
    title: 'Development',
    description: 'Create a platform with the best and coolest quality from us.',
  },
  {
    icon: <IconUiUx/>,
    title: 'UI/UX Designer',
    description: 'We provide UI/UX Design services, and of course with the best quality',
  },
  {
    icon: <IconGraphikDesigner/>,
    title: 'Graphik Designer',
    description: 'We provide Graphic Design services, with the best designers',
  },
  {
    icon: <IconMotionGraphik/>,
    title: 'Motion Graphik',
    description: 'Create a platform with the best and coolest quality from us.',
  },
  {
    icon: <IconPhotography/>,
    title: 'Photography',
    description: 'We provide Photography services, and of course with the best quality',
  },
  {
    icon: <IconVideography/>,
    title: 'Videography',
    description: 'Create a platform with the best and coolest quality from us.',
  },
]

const Tabs: FC = (): JSX.Element => {
  return (
    <div className={styles.tabs}>
      {
        MOCK?.map((item: ITab) =>
          <OneTab
            key={item?.title}
            icon={item?.icon}
            title={item?.title}
            description={item?.description}
          />
        )
      }
    </div>
  );
};

export default Tabs;