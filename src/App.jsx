import React, { useState } from "react";
import TreeNode from "./components/Tree";
import counterTree from "./data/counterTree";
import "./App.css";

const App = () => {
  const [treeData, setTreeData] = useState(counterTree);

  const handleAddChild = (parentNode) => {
    const newNodeId = Math.floor(Math.random() * 1000) + 1;
    const newChildValue = parentNode.children ? parentNode.children.length : 0;
    const newNode = { id: newNodeId, value: `-${newChildValue + 1}` };

    const updatedParent = {
      ...parentNode,
      children: [...(parentNode.children || []), newNode],
    };

    const updatedTreeData = updateNode(
      treeData,
      updatedParent.id,
      updatedParent
    );
    setTreeData(updatedTreeData);
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

  const updateNode = (tree, nodeId, newNode) => {
    if (tree.id === nodeId) {
      return newNode;
    }

    if (tree.children) {
      const updatedChildren = tree.children.map((child) =>
        updateNode(child, nodeId, newNode)
      );
      return { ...tree, children: updatedChildren };
    }

    return tree;
  };

  return (
    <div>
      <TreeNode
        node={treeData}
        onAddChild={handleAddChild}
        onDelete={handleDeleteNode}
      />
    </div>
  );
};

export default App;
