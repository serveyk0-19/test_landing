import React, { FC } from 'react';

interface Props {
  className?: string;
}

const IconMotionGraphik: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#FEDC5A" fillOpacity="0.1"/>
      <path d="M42.2 43.6667H27.8C25.8 43.6667 25 42.8133 25 40.6933V39.3067C25 37.1867 25.8 36.3333 27.8 36.3333H42.2C44.2 36.3333 45 37.1867 45 39.3067V40.6933C45 42.8133 44.2 43.6667 42.2 43.6667Z" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M39.5333 32.3333H30.4667C28.4667 32.3333 27.6667 31.48 27.6667 29.36V27.9733C27.6667 25.8533 28.4667 25 30.4667 25H39.5333C41.5333 25 42.3333 25.8533 42.3333 27.9733V29.36C42.3333 31.48 41.5333 32.3333 39.5333 32.3333Z" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 47.3333V44.1333" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 35.3333V32.6667" stroke="#FEDC5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 20.6667V24.2533" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default IconMotionGraphik;