import React, { useState } from "react";

const Counter = ({ node, add }) => {
  return (
    <div className="counter">
      <span>{node.value}</span>
      <button onClick={() => add(node, node.value - 1)}>+</button>
      <button>-</button>
    </div>
  );
};

export default Counter;
