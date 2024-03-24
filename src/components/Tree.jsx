import React from "react";
import Counter from "./Counter";

const TreeNode = ({ node, onAdd, onDelete }) => {
  const addChild = () => {
    onAdd(node);
  };

  const deleteChild = () => {
    onDelete(node.id);
  };

  return (
    <div className="tree-node">
      {node.id == 1 ? (
        <Counter node={node} add={addChild} />
      ) : (
        <Counter node={node} add={addChild} del={deleteChild} />
      )}
      {node.children &&
        node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default TreeNode;
