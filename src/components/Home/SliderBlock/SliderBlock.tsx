import React, { FC } from 'react';
import Slider from "react-slick";
import styles from './SliderBlock.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cn from 'classnames';
import IconArrow from '../../UI/icons/IconArrow';
import SecondCircleGradient from '../../UI/Gradients/SecondCircleGradient';
import Circles from '../../UI/icons/Circles';
import Zigzag from '../../UI/icons/Zigzag';

const MOCK = ['slide1', 'slide2', 'slide3', 'slide1', 'slide2', 'slide3', 'slide1', 'slide2', 'slide3'];

const SliderBlock: FC = (): JSX.Element => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    nextArrow: <div className={cn(styles.arrow, styles.prevArrow)}><IconArrow/></div>,
    prevArrow: <div className={cn(styles.arrow, styles.nextArrow)}><IconArrow/></div>,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          initialSlide: 0
        }
      },
      {
        breakpoint: 426,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className={styles.sliderBlock}>
      <SecondCircleGradient className={styles.circleGradient}/>
      <h2 className={styles.title}>
        Our Awesome Portfolio
        <Circles className={styles.circles}/>
      </h2>
      <div className={styles.slider}>
        <Slider {...settings}>
          {
            MOCK?.map((item: any) =>
              <div key={item} className={styles.imgWrap}>
                <img src={`./images/${item}.png`} alt={item}/>
              </div>
            )
          }
        </Slider>
        <Zigzag className={styles.zigzag}/>
      </div>
    </div>
  );
};

export default SliderBlock;