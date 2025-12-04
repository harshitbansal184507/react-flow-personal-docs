import ReactFlow, { Controls, Background, MiniMap } from "reactflow";

export default function FlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeClick,
  onEdgeClick,
}) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      onEdgeClick={onEdgeClick}
      fitView
    >
      <Controls />
      <MiniMap />
      <Background variant="dots" />
    </ReactFlow>
  );
}
