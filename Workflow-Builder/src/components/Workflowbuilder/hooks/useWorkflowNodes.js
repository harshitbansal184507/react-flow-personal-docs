import { useState } from "react";
import { useNodesState } from "reactflow";

const initialNodes = [
  {
    id: "start",
    type: "default",
    data: { label: "Start", prompt: "Welcome message", isStart: true },
    position: { x: 250, y: 0 },
  },
];

export function useWorkflowNodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeCounter, setNodeCounter] = useState(1);

  const addNode = () => {
    const newNode = {
      id: `node_${nodeCounter}`,
      type: "default",
      data: {
        label: `Node ${nodeCounter}`,
        prompt: `Prompt for node ${nodeCounter}`,
        isStart: false,
      },
      position: {
        x: Math.random() * 400 + 100,
        y: Math.random() * 400 + 100,
      },
    };

    setNodes((nds) => [...nds, newNode]);
    setNodeCounter(nodeCounter + 1);
  };

  const deleteNode = () => {
    if (!selectedNode) return;

    setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id));
    setSelectedNode(null);
  };

  const updateNodeData = (field, value) => {
    if (!selectedNode) return;

    setNodes((nds) =>
      nds.map((n) =>
        n.id === selectedNode.id
          ? { ...n, data: { ...n.data, [field]: value } }
          : n
      )
    );

    setSelectedNode({
      ...selectedNode,
      data: { ...selectedNode.data, [field]: value },
    });
  };

  return {
    nodes,
    setNodes,
    onNodesChange,
    selectedNode,
    setSelectedNode,
    addNode,
    deleteNode,
    updateNodeData,
  };
}
