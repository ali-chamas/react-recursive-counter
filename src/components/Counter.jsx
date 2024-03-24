import React, { useState } from "react";

const Counter = ({ node, add, del }) => {
  return (
    <div className="counter">
      <button onClick={add}>+</button>
      <button onClick={del}>-</button>
      <span>{node.value}</span>
    </div>
  );
};

export default Counter;
