import { useEdgesState, addEdge, MarkerType } from "reactflow";

export function useWorkflowEdges() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params) => {
    const edgeWithCondition = {
      ...params,
      markerEnd: { type: MarkerType.ArrowClosed },
      data: { condition: "Default transition" },
    };

    setEdges((eds) => addEdge(edgeWithCondition, eds));
  };

  const onEdgeClick = (event, edge) => {
    event.stopPropagation();
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  };

  return {
    edges,
    setEdges,
    onEdgesChange,
    onConnect,
    onEdgeClick,
  };
}
