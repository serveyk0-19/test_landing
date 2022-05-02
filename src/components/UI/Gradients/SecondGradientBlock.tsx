import React, { FC } from 'react';
import styles from './Gradients.module.scss';
import cn from 'classnames';

interface Props {
  className: string;
}

const SecondGradientBlock: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1918" height="1451" viewBox="0 0 1918 1451" fill="none">
      <g filter="url(#filter0_f_157_663)">
        <rect x="1501" y="225" width="467" height="1399.3" rx="233.5" transform="rotate(65.7118 1501 225)" fill="url(#paint0_linear_157_663)" fillOpacity="0.41"/>
      </g>
      <defs>
        <filter id="filter0_f_157_663" x="0.876831" y="0.319832" width="1916.89" height="1450.59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_157_663"/>
        </filter>
        <linearGradient id="paint0_linear_157_663" x1="1734.5" y1="225" x2="1734.5" y2="1624.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBA81C" stopOpacity="0.26"/>
          <stop offset="1" stopColor="#E05688" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SecondGradientBlock;