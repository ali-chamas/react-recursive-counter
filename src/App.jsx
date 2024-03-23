import React, { useState } from "react";
import TreeNode from "./components/Tree";
import counterTree from "./data/counterTree";

const App = () => {
  const [treeData, setTreeData] = useState(counterTree);

  const handleAddChild = (parentId) => {
    const newNode = { id: Math.floor(Math.random() * 100000), value: -1 };
    const updatedTreeData = addNodeToTree(treeData, parentId, newNode);
    setTreeData(updatedTreeData);
  };

  const addNodeToTree = (tree, parentId, newNode) => {
    if (tree.id === parentId) {
      return { ...tree, children: [...(tree.children || []), newNode] };
    }
    if (tree.children) {
      return {
        ...tree,
        children: tree.children.map((child) =>
          addNodeToTree(child, parentId, newNode)
        ),
      };
    }
    return tree;
  };

  const handleDeleteNode = (nodeId) => {
    const updatedTree = deleteNode(treeData, nodeId);
    setTreeData(updatedTree);
  };

  const deleteNode = (tree, nodeId) => {
    if (tree.id === nodeId) {
      return null;
    }

    if (tree.children) {
      const updatedChildren = tree.children
        .filter((child) => child.id !== nodeId)
        .map((child) => deleteNode(child, nodeId));
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
