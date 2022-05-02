import React, { FC } from 'react';

interface Props {
  className?: string;
}

const IconPhotography: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#5454D4" fillOpacity="0.1"/>
      <path d="M28.0133 47.3333H41.9867C45.6667 47.3333 47.1333 45.08 47.3067 42.3333L48 31.32C48.1867 28.44 45.8933 26 43 26C42.1867 26 41.44 25.5333 41.0667 24.8133L40.1067 22.88C39.4933 21.6667 37.8933 20.6667 36.5333 20.6667H33.48C32.1067 20.6667 30.5067 21.6667 29.8933 22.88L28.9333 24.8133C28.56 25.5333 27.8133 26 27 26C24.1067 26 21.8133 28.44 22 31.32L22.6933 42.3333C22.8533 45.08 24.3333 47.3333 28.0133 47.3333Z" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 28.6667H37" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M35 42C37.3867 42 39.3333 40.0533 39.3333 37.6667C39.3333 35.28 37.3867 33.3333 35 33.3333C32.6133 33.3333 30.6667 35.28 30.6667 37.6667C30.6667 40.0533 32.6133 42 35 42Z" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default IconPhotography;