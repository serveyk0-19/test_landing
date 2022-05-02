import React, { FC } from 'react';
import MainBlock from '../../components/Home/MainBlock/MainBlock';
import VideoBlock from '../../components/Home/VideoBlock/VideoBlock';
import TabsBlock from '../../components/Home/TabsBlock/TabsBlock';
import ContactUsBlock from '../../components/Home/ContactUsBlock/ContactUsBlock';
import SliderBlock from '../../components/Home/SliderBlock/SliderBlock';

const Home: FC = (): JSX.Element => {
  return (
    <div>
      <MainBlock/>
      <VideoBlock/>
      <TabsBlock/>
      <SliderBlock/>
      <ContactUsBlock/>
    </div>
  );
};

export default Home;