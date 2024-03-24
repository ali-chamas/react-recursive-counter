import React, { useState } from "react";
import TreeNode from "./components/Tree";
import counterTree from "./data/counterTree";
import "./App.css";

const App = () => {
  const [treeData, setTreeData] = useState(counterTree);

  const handleAddChild = (parentNode) => {
    //retrieve the index of the added child
    const newValue = parentNode.children ? parentNode.children.length : 0;
    const newNode = {
      id: Math.floor(Math.random() * 100000) + 1,
      value: `-${newValue + 1}`,
    };

    const updatedParent = {
      ...parentNode,
      children: [...(parentNode.children || []), newNode],
    };

    const updatedTreeData = updateNode(
      treeData,

      updatedParent
    );
    setTreeData(updatedTreeData);
  };

  const updateNode = (tree, newNode) => {
    if (tree.id === newNode.id) {
      return newNode;
    }

    const updatedChildren = tree.children?.map((child) =>
      updateNode(child, newNode)
    );

    return { ...tree, children: updatedChildren };
  };
  const handleDeleteNode = (nodeId) => {
    const updatedTree = deleteNode(treeData, nodeId);
    setTreeData(updatedTree);
  };

  const deleteNode = (tree, nodeId) => {
    const updatedChildren = tree.children
      ? tree.children
          .filter((child) => child.id !== nodeId)
          .map((child) => deleteNode(child, nodeId))
      : [];

    return { ...tree, children: updatedChildren };
  };

  return (
    <div>
      <TreeNode
        node={treeData}
        onAdd={handleAddChild}
        onDelete={handleDeleteNode}
      />
    </div>
  );
};

export default App;
