import React from "react";
import "../App.css";
const TreeNode = ({ node, onAddChild, onDelete }) => {
  const handleAddChild = () => {
    onAddChild(node.id);
  };

  const handleDelete = () => {
    onDelete(node.id);
  };

  return (
    <div className="tree-node">
      <div className="counter">
        <span>{node.value}</span>
        <button onClick={handleAddChild}>+</button>
        <button onClick={handleDelete}>-</button>
      </div>
      {node.children &&
        node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            onAddChild={onAddChild}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TreeNode;
