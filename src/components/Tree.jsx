import React from "react";
import Counter from "./Counter";
import "../App.css";

const Tree = ({ node, addNode }) => {
  return (
    <div className="tree-node">
      {node.id == 1 ? (
        <Counter add={addNode} node={node} />
      ) : (
        <Counter add={addNode} node={node} />
      )}

      {node.children &&
        node.children.map((child, i) => (
          <Tree key={i} node={child} addNode={addNode} />
        ))}
    </div>
  );
};

export default Tree;
