import React from "react";
import "./Text.scss";
export interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  label: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ label, className, ...props }) => {
  return (
    <p className={`text-main-style ${className}`} {...props}>
      {label}
    </p>
  );
};

export default Text;

