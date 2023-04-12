import React from "react";
import "./Text.scss";
import validateKeys from "../../../keys";

export interface TextProps {
  label: string;
}

const Text = (props: TextProps) => {
  const { error } = validateKeys();

  if (error) {
    return;
  }
  return <h4>{props.label}</h4>;
};

export default Text;
