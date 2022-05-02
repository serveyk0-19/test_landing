import React, { FC } from 'react';

interface Props {
  className: string;
}

const FifthGradient: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="3153" height="2294" viewBox="0 0 3153 2294" fill="none">
      <g filter="url(#filter0_f_172_660)">
        <rect x="2573.79" y="225" width="860.002" height="2576.87" rx="233.5" transform="rotate(65.7118 2573.79 225)" fill="url(#paint0_linear_172_660)" fillOpacity="0.12"/>
      </g>
      <defs>
        <filter id="filter0_f_172_660" x="0.319702" y="0.319824" width="3151.89" height="2293.18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_172_660"/>
        </filter>
        <linearGradient id="paint0_linear_172_660" x1="3003.79" y1="225" x2="3003.79" y2="2801.87" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBA81C" stopOpacity="0.4"/>
          <stop offset="1" stopColor="#E05688" stopOpacity="0.15"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FifthGradient;