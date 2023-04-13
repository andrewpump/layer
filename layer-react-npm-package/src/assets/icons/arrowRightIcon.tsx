import React, { FC } from 'react';

export interface ArrowRightIconProps {
  color?: string;
}

const ArrowRightIcon: FC<ArrowRightIconProps> = ({ color = '#000000', ...props }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.9997 21.6667L0.333008 11L10.9997 0.333328L12.8997 2.19999L5.43301 9.66666H21.6663V12.3333H5.43301L12.8997 19.8L10.9997 21.6667Z"
        fill={color === "#000000" ? "#000000" : color}
      />
    </svg>
  );
};

export default ArrowRightIcon;

