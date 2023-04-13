import React from "react";
import "./Loader.scss";

const Loader = () => {
    return (
        <div className="lds-ring">
          <div>Loader</div>
          <div></div>
          <div></div>
        </div>
      );
};

export default Loader;
