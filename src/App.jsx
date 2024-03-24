import React, { useState } from "react";
import TreeNode from "./components/Tree";
import counterTree from "./data/counterTree";
import "./App.css";

const App = () => {
  const [treeData, setTreeData] = useState(counterTree);

  const handleAddChild = (parentId) => {
    const parentNode = findNode(treeData, parentId);
    if (!parentNode) return;

    const newNodeId = Math.floor(Math.random() * 1000) + 1;

    if (parentNode.children && Array.isArray(parentNode.children)) {
      const newChildValue = parentNode.children.length;
      const newNode = { id: newNodeId, value: `-${newChildValue + 1}` };

      const updatedParent = {
        ...parentNode,
        children: [...parentNode.children, newNode],
      };

      const updatedTreeData = updateNode(
        treeData,
        updatedParent.id,
        updatedParent
      );
      setTreeData(updatedTreeData);
    } else {
      const newNode = { id: newNodeId, value: -1 };

      const updatedTreeData = updateNode(treeData, parentId, {
        ...parentNode,
        children: [newNode],
      });
      setTreeData(updatedTreeData);
    }
  };

  const handleDeleteNode = (nodeId) => {
    const updatedTree = deleteNode(treeData, nodeId);
    setTreeData(updatedTree);
  };

  const deleteNode = (tree, nodeId) => {
    if (!tree) return null;
    if (tree.id === nodeId) {
      return null;
    }

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

  const findNode = (tree, nodeId) => {
    if (tree.id === nodeId) {
      return { ...tree, parent: null };
    }

    if (tree.children) {
      for (let child of tree.children) {
        const foundNode = findNode(child, nodeId);
        if (foundNode) {
          return { ...foundNode, parent: tree };
        }
      }
    }

    return null;
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
