import React, { useState } from "react";
import Tree from "./components/Tree";
import counterTree from "./data/counterTree";

const App = () => {
  const [treeData, setTreeData] = useState(counterTree);

  const addNode = (parent, value) => {
    const newNode = {
      id: Math.floor(Math.random() * 100000),
      value: value,
      children: [],
    };

    const updatedTreeData = addChildNode(treeData, parent, newNode);

    setTreeData(updatedTreeData);
  };

  const addChildNode = (tree, parent, newNode) => {
    if (tree.id === parent.id) {
      return {
        ...tree,
        children: [...tree.children, newNode],
      };
    } else if (tree.children) {
      const updatedChildren = tree.children.map((child, i) =>
        addChildNode(child, parent, { ...newNode, value: child.value - 1 })
      );
      return { ...tree, children: updatedChildren };
    }
    return tree;
  };

  return (
    <div>
      <Tree addNode={addNode} node={treeData} />
    </div>
  );
};

export default App;
