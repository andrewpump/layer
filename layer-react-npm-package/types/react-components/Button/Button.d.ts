import React from 'react';
import "./Button.scss";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    child: React.ReactNode;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
