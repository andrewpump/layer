/// <reference types="react" />
interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface TextProps {
    label: string;
}
declare const Text: (props: TextProps) => JSX.Element;

export { Button, Text };
