import { useState } from "react";
import { useSelector } from "react-redux";
import Buttons from "./buttons";

const Counter = () => {
  const counterglobalval = useSelector((state) => state.counter.counter);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-auto">
      <h1>Counter</h1>
      <p className="display-1">{counterglobalval}</p>
      <Buttons />
    </div>
  );
};

export default Counter;
