import React from "react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button> <h4>{props.label}</h4></button>;
};

export default Button;
