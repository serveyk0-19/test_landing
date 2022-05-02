import React, { FC } from 'react';

interface Props {
  className?: string;
}

const IconDevelopment: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="69" height="69" viewBox="0 0 69 69" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M34.5 69C53.5538 69 69 53.5538 69 34.5C69 15.4462 53.5538 0 34.5 0C15.4462 0 0 15.4462 0 34.5C0 53.5538 15.4462 69 34.5 69Z" fill="#5454D4" fillOpacity="0.1"/>
      <path d="M31 35.3333C30.12 35.7733 29.3867 36.4267 28.84 37.24C28.5333 37.7067 28.5333 38.2933 28.84 38.76C29.3867 39.5733 30.12 40.2267 31 40.6667" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M39.28 35.3333C40.16 35.7733 40.8933 36.4267 41.44 37.24C41.7467 37.7067 41.7467 38.2933 41.44 38.76C40.8933 39.5733 40.16 40.2267 39.28 40.6667" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M31 47.3333H39C45.6667 47.3333 48.3333 44.6667 48.3333 38V30C48.3333 23.3333 45.6667 20.6667 39 20.6667H31C24.3333 20.6667 21.6667 23.3333 21.6667 30V38C21.6667 44.6667 24.3333 47.3333 31 47.3333Z" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.9734 28.68L47.6 28.6667" stroke="#5454D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default IconDevelopment;