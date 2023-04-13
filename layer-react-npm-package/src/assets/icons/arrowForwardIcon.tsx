import React from 'react';

interface ArrowForwardIconProps {
  color?: string;
}

const ArrowForwardIcon: React.FC<ArrowForwardIconProps> = ({ color = '#000000', ...props }) => {
  return (
    <svg
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.35008 13.6667L0.166748 12.4833L5.65008 6.99999L0.166748 1.51666L1.35008 0.333328L8.01675 6.99999L1.35008 13.6667Z"
        fill={color === "#000000" ? "#000000" : color}
      />
    </svg>
  );
};

export default ArrowForwardIcon;
