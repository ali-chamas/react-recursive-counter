import React from "react";
import Counter from "./Counter";

const TreeNode = ({ node, onAddChild, onDelete }) => {
  const handleAddChild = () => {
    onAddChild(node);
  };

  const handleDelete = () => {
    onDelete(node.id);
  };

  return (
    <div className="tree-node">
      {node.id == 1 ? (
        <Counter node={node} add={handleAddChild} />
      ) : (
        <Counter node={node} add={handleAddChild} del={handleDelete} />
      )}
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
