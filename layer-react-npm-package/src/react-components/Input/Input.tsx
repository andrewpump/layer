import React from "react";
import "./Input.scss";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value?: string;
  name?: string;
  className?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

const Input: React.FC<InputProps> = ({ type, value, name, className, placeholder, onChange,  ...props }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className={`input-main-style ${className ? className : ""}`}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;

