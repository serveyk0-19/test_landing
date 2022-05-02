import React, { FC, useRef } from 'react';
import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/dist/plyr.css'
import styles from './VideoBlock.module.scss';
import CircleGradient from '../../UI/Gradients/CircleGradient';

const videoId = "4gVUGDWkelQ";
const provider = "youtube";
const videoOptions = undefined;

const VideoBlock: FC = (): JSX.Element => {
  const ref = useRef<APITypes>(null);

  return (
    <div className={styles.videoBlock}>
      <CircleGradient className={styles.circle}/>
      <div className={styles.videoTitle}>
        <h2 className={styles.title}>Why Enver Is The Best Choice?</h2>
        <p className={styles.description}>Watch this one minute video so you understand why you should use our services!</p>
      </div>

      <Plyr
        ref={ref}
        source={{
          type: "video",
          sources: [
            {
              src: videoId,
              provider: provider
            }
          ]
        }}
        options={videoOptions}
      />
    </div>
  );
};

export default VideoBlock;