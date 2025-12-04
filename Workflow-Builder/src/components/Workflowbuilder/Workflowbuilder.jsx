import Sidebar from "./Sidebar";
import FlowCanvas from "./FlowCanvas";

import { useWorkflowNodes } from "./hooks/useWorkflowNodes";
import { useWorkflowEdges } from "./hooks/useWorkflowEdges";

export default function WorkflowBuilder() {
  const {
    nodes,
    setNodes,
    onNodesChange,
    selectedNode,
    setSelectedNode,
    addNode,
    deleteNode,
    updateNodeData,
  } = useWorkflowNodes();

  const { edges, setEdges, onEdgesChange, onConnect, onEdgeClick } =
    useWorkflowEdges();

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <Sidebar
        nodes={nodes}
        edges={edges}
        addNode={addNode}
        selectedNode={selectedNode}
        updateNodeData={updateNodeData}
        deleteNode={deleteNode}
      />

      <div style={{ flex: 1 }}>
        <FlowCanvas
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(e, node) => setSelectedNode(node)}
          onEdgeClick={onEdgeClick}
        />
      </div>
    </div>
  );
}
