import React, { FC } from 'react';

interface Props {
  className?: string;
}

const IconUiUx: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#F04037" fillOpacity="0.1"/>
      <path d="M36.3467 21.8933L44.2133 25.3867C46.48 26.3867 46.48 28.04 44.2133 29.04L36.3467 32.5333C35.4533 32.9333 33.9867 32.9333 33.0933 32.5333L25.2267 29.04C22.96 28.04 22.96 26.3867 25.2267 25.3867L33.0933 21.8933C33.9867 21.4933 35.4533 21.4933 36.3467 21.8933Z" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 32.6667C23 33.7867 23.84 35.08 24.8667 35.5333L33.92 39.56C34.6133 39.8667 35.4 39.8667 36.08 39.56L45.1333 35.5333C46.16 35.08 47 33.7867 47 32.6667" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 39.3333C23 40.5733 23.7333 41.6933 24.8667 42.2L33.92 46.2267C34.6133 46.5333 35.4 46.5333 36.08 46.2267L45.1333 42.2C46.2667 41.6933 47 40.5733 47 39.3333" stroke="#F04037" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default IconUiUx;