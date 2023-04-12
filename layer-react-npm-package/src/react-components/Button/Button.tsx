import React from "react";
import "./Button.scss";
import validateKeys from "../../../keys";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const { error } = validateKeys();

  if (error) {
    console.log("API key and/or SDK key not found in environment variables");
    return;
  }
  return (
    <button>
      <h4>{props.label}</h4>
    </button>
  );
};

export default Button;
