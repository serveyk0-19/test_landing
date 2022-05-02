import React, { FC } from 'react';

interface Props {
  className: string;
}

const ThirdGradient: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1127" height="1165" viewBox="0 0 1127 1165" fill="none">
      <g filter="url(#filter0_f_165_665)">
        <rect x="249" y="415.701" width="252.366" height="666.74" rx="126.183" transform="rotate(-41.3419 249 415.701)" fill="url(#paint0_linear_165_665)" fillOpacity="0.27"/>
      </g>
      <defs>
        <filter id="filter0_f_165_665" x="0.901611" y="0.90155" width="1126.08" height="1163.47" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_165_665"/>
        </filter>
        <linearGradient id="paint0_linear_165_665" x1="375.183" y1="415.701" x2="375.183" y2="1082.44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5454D4"/>
          <stop offset="1" stopColor="#5454D4" stopOpacity="0.42"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ThirdGradient;