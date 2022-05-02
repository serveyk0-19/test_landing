import React, { FC } from 'react';

interface Props {
  className: string;
}

const CircleGradient: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1102" height="1092" viewBox="0 0 1102 1092" fill="none">
      <g filter="url(#filter0_f_169_658)">
        <rect x="208" y="587.594" width="467" height="508.495" rx="233.5" transform="rotate(-54.3739 208 587.594)" fill="url(#paint0_linear_169_658)" fillOpacity="0.21"/>
      </g>
      <defs>
        <filter id="filter0_f_169_658" x="0.291504" y="0.291443" width="1100.76" height="1091.21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_169_658"/>
        </filter>
        <linearGradient id="paint0_linear_169_658" x1="441.5" y1="587.594" x2="441.5" y2="1096.09" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5454D4"/>
          <stop offset="1" stopColor="#5454D4" stopOpacity="0.42"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleGradient;