import React from "react";

import "./Loader.scss";

const Loader = () => {
  return (
    <div className='container'>
      <div className='square'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='loading_title'>Loading</div>
    </div>
  );
};

export default Loader;
