import React, { FC } from 'react';

interface Props {
  className?: string;
}

const Zigzag: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="99" height="32" viewBox="0 0 99 32" fill="none">
      <path d="M2 2L25.2781 26.2247L39.7483 8.60674L57.0497 26.2247L75.9238 8.60674L97 30" stroke="#E7E7E7" strokeWidth="4"/>
    </svg>
  );
};

export default Zigzag;