import React from "react";

function Arrow({onClickNext, onClickPrev}) {
  return (
    <>
      <div className="arrow  arrow-left" onClick={onClickPrev}>
        <img src={require('./images/arrow.png')} alt="arrow-left"/>
      </div>
      <div className="arrow  arrow-right" onClick={onClickNext}>
        <img src={require('./images/arrow.png')} alt="arrow-right"/>
      </div>
    </>
  );
}

export default Arrow;
