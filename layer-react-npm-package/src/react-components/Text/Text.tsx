import React from "react";
import "./Text.scss";

export interface TextProps {
  label: string;
}

const Text = (props: TextProps) => {
  return <h4>{props.label}</h4>;
};

export default Text;
