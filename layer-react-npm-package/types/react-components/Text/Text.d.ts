import React from "react";
import "./Text.scss";
export interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
    label: string;
    className?: string;
}
declare const Text: React.FC<TextProps>;
export default Text;
