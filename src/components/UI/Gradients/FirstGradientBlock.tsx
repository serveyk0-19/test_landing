import React, { FC } from 'react';

interface Props {
  className: string;
}

const FirstGradientBlock: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1691" height="1514" viewBox="0 0 1691 1514" fill="none">
      <g filter="url(#filter0_f_157_662)">
        <rect x="208" y="587.594" width="467" height="1233.79" rx="233.5" transform="rotate(-54.3739 208 587.594)" fill="url(#paint0_linear_157_662)" fillOpacity="0.27"/>
      </g>
      <defs>
        <filter id="filter0_f_157_662" x="0.291504" y="0.291382" width="1690.31" height="1513.69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_157_662"/>
        </filter>
        <linearGradient id="paint0_linear_157_662" x1="441.5" y1="587.594" x2="441.5" y2="1821.39" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5454D4"/>
          <stop offset="1" stopColor="#5454D4" stopOpacity="0.42"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FirstGradientBlock;