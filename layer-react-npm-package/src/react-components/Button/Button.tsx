import React from 'react';
import "./Button.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  child: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ child, className = "", ...props }) => {
  return (
    <button className={`button-component-main-style ${className}`} {...props}>
      {child}
    </button>
  );
};

export default Button;

