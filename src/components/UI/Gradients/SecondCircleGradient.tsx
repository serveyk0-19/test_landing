import React, { FC } from 'react';

interface Props {
  className: string;
}

const SecondCircleGradient: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1296" height="1284" viewBox="0 0 1296 1284" fill="none">
      <g filter="url(#filter0_f_190_665)">
        <rect width="599.578" height="652.853" rx="233.5" transform="matrix(-0.582494 -0.812835 -0.812835 0.582494 1088.24 695.314)" fill="url(#paint0_linear_190_665)" fillOpacity="0.2"/>
      </g>
      <defs>
        <filter id="filter0_f_190_665" x="0.62204" y="0.247559" width="1295.33" height="1283.06" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_190_665"/>
        </filter>
        <linearGradient id="paint0_linear_190_665" x1="299.789" y1="0" x2="299.789" y2="652.853" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5454D4"/>
          <stop offset="1" stopColor="#5454D4" stopOpacity="0.42"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SecondCircleGradient;