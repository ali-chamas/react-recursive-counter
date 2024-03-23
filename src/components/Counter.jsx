import React, { useState } from "react";

const Counter = ({ node, add, del }) => {
  return (
    <div className="counter">
      <span>{node.value}</span>
      <button onClick={() => add(node, node.value - 1)}>+</button>
      <button onClick={del}>-</button>
    </div>
  );
};

export default Counter;
