import React, { FC } from 'react';

interface Props {
  className?: string;
}

const Circles: FC<Props> = ({ className }): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="51" height="60" viewBox="0 0 51 60" fill="none">
      <circle cx="20" cy="20" r="18.5" stroke="white" strokeWidth="3"/>
      <circle cx="31" cy="40" r="19.5" stroke="white"/>
    </svg>
  );
};

export default Circles;