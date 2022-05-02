import React, { FC } from 'react';

interface Props {
  className?: string;
}

const IconDevelopment: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
      <path d="M6.82486 12.4565C7.16841 12.1129 7.16841 11.5559 6.82486 11.2124L2.16869 6.55619L6.82486 1.90002C7.16841 1.55647 7.16841 0.999474 6.82486 0.655929C6.48132 0.312383 5.92432 0.312383 5.58077 0.655929L0.302555 5.93415C-0.0409903 6.27769 -0.0409904 6.83469 0.302555 7.17823L5.58077 12.4565C5.92432 12.8 6.48132 12.8 6.82486 12.4565Z" fill="white"/>
    </svg>
  );
};

export default IconDevelopment;