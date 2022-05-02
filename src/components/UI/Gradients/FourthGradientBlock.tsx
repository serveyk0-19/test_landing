import React, { FC } from 'react';

interface Props {
  className: string;
}

const FourthGradientBlock: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1120" height="1121" viewBox="0 0 1120 1121" fill="none">
      <g filter="url(#filter0_f_165_666)">
        <rect x="711.089" y="255.851" width="215.168" height="644.721" rx="107.584" transform="rotate(44.8501 711.089 255.851)" fill="url(#paint0_linear_165_666)"/>
      </g>
      <defs>
        <filter id="filter0_f_165_666" x="0.959717" y="0.413086" width="1118.11" height="1119.7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_165_666"/>
        </filter>
        <linearGradient id="paint0_linear_165_666" x1="818.673" y1="255.851" x2="818.673" y2="900.571" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBA81C" stopOpacity="0.26"/>
          <stop offset="1" stopColor="#E05688" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FourthGradientBlock;