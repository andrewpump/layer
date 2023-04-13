import React, { FC } from "react";

interface CrossIconProps {
  color?: string;
}

const CrossIcon: FC<CrossIconProps> = ({ color = "#000000", ...props }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
     <path
        d="M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z"
        fill={color === "#000000" ? "#000000" : color}
      />
    </svg>
  );
};

export default CrossIcon;
