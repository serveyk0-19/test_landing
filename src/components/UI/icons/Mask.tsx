import React, { FC } from 'react';

interface Props {
  className?: string;
}

const Mask: FC<Props> = ({className}): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="496" height="496" viewBox="0 0 496 496" fill="none">
      <mask id="mask0_2_196" maskUnits="userSpaceOnUse" x="3" y="3" width="490" height="490">
        <rect x="150.263" y="-1.90964" width="379.337" height="379.337" rx="24.179" transform="rotate(23.639 150.263 -1.90964)" fill="#5454D4" stroke="white" strokeWidth="400"/>
      </mask>
      <g mask="url(#mask0_2_196)">
        <path d="M6.79371 114.725C51.9604 139.725 155.794 174.725 209.794 114.725C277.294 39.7246 408.794 54.7246 468.794 73.2246" stroke="white"/>
        <path d="M7.99324 142.831C54.6477 164.931 160.483 193.308 210.589 130.019C273.22 50.9085 405.405 57.5791 466.453 72.2554" stroke="white"/>
        <path d="M2.36286 171.321C49.0173 193.421 154.853 221.798 204.958 158.509C267.59 79.3985 399.775 86.0691 460.823 100.745" stroke="white"/>
        <path d="M-3.63714 200.321C43.0173 222.421 148.853 250.798 198.958 187.509C261.59 108.399 393.775 115.069 454.823 129.745" stroke="white"/>
        <path d="M-3.63714 200.321C43.0173 222.421 148.853 250.798 198.958 187.509C261.59 108.399 393.775 115.069 454.823 129.745" stroke="white"/>
        <path d="M8.36286 299.321C60.5626 321.07 179.146 348.641 235.881 284.933C306.8 205.298 455.129 210.948 523.543 225.158" stroke="white"/>
        <path d="M-3.63714 343.908C48.5626 365.657 167.146 393.228 223.881 329.52C294.8 249.885 443.129 255.535 511.543 269.745" stroke="white"/>
        <path d="M-1.63714 375.908C50.5626 397.657 169.146 425.228 225.881 361.52C296.8 281.885 445.129 287.535 513.543 301.745" stroke="white"/>
        <path d="M13.3629 407.908C65.5626 429.657 184.146 457.228 240.881 393.52C311.8 313.885 460.129 319.535 528.543 333.745" stroke="white"/>
        <path d="M38.3629 455.908C90.5625 477.657 209.146 505.228 265.881 441.52C336.8 361.885 485.129 367.535 553.543 381.745" stroke="white"/>
        <path d="M31.3629 269.321C78.0173 291.421 183.853 319.798 233.958 256.509C296.59 177.399 428.775 184.069 489.823 198.745" stroke="white"/>
        <path d="M-9.63714 233.321C42.8782 255.05 162.187 282.575 219.299 218.843C290.69 139.179 439.938 144.77 508.772 158.954" stroke="white"/>
      </g>
    </svg>
  );
};

export default Mask;