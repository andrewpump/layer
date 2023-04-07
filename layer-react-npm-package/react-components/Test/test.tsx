import React from "react";

interface TestProps{
    label:string;
}

const Test = (props:TestProps) =>{
    return <h1>{props.label}</h1>
};

export default Test;