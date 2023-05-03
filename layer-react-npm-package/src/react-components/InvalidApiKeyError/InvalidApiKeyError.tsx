import React from "react";
import "./InvalidApiKeyError.scss";
import Text from "../Text/Text";

export type ErrorView  = {
  title: string;
  message: string;
} 


export type InvalidApiKeyErrorProps = {
  color: string;
  errorView : ErrorView
};


const InvalidApiKeyError: React.FC<InvalidApiKeyErrorProps> = ({ color, errorView }) => {
  return (
    <div className="environment-error-main-container-style">
      <div className="top-container">
        <Text
          className="heading-text-style"
          label={`${errorView?.title}`}
        />
      </div>
      <div className="bottom-container-center">
        <Text
          className="text-style"
          label={`${errorView?.message}`}
        />
      </div>
    </div>
  );
};

export default InvalidApiKeyError;
