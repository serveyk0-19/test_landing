import React, { FC } from 'react';

interface Props {
  className?: string;
}

const Triangles: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="106" height="121" viewBox="0 0 106 121" fill="none">
      <path d="M32.5135 78.1455L33.8715 20.1376L83.4287 50.3176L32.5135 78.1455Z" stroke="#E7E7E7" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M37.0689 100.854L38.508 39.3827L91.0239 71.3644L37.0689 100.854Z" stroke="#E7E7E7" strokeLinejoin="round"/>
    </svg>
  );
};

export default Triangles;