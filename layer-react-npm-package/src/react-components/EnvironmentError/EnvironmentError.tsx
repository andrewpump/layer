import React from "react";
import "./EnvironmentError.scss";
import Text from "../Text/Text";

export type EnvironmentErrorProps = {
  color: string;
};

const EnvironmentError: React.FC<EnvironmentErrorProps> = ({ color }) => {
  return (
    <div className="environment-error-main-container-style">
      <div className="top-container">
        <Text
          className="heading-text-style"
          label="Message for Developer"
        />
      </div>
      <div className="bottom-container">
        <Text
          className="text-style"
          label="Your Application is missing the following API/SDK keys in your process file (usually .env):"
        />
         <br></br> 
        <Text
          className="text-style"
          label="1. OPEN_AI_API_KEY"
        />
        <br></br> 
        <Text
          className="text-style"
          label="2. LAYER_SDK_KEY"
        />
          <br></br> 
        <Text
          className="text-style"
          label="Please add these keys to your process file to correct the error"
        />
      </div>
    </div>
  );
};

export default EnvironmentError;
