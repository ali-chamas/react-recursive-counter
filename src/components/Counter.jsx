import React, { useState } from "react";

const Counter = ({ node, add, del }) => {
  return (
    <div className="counter">
      <span>{node.value}</span>
      <button onClick={add}>+</button>
      <button onClick={del}>-</button>
    </div>
  );
};

export default Counter;
