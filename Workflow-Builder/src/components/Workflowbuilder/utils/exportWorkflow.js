export const exportWorkflow = (nodes, edges) => {
  const workflow = {
    id: crypto.randomUUID(),
    name: "Custom Workflow",
    nodes: nodes.map((node) => ({
      name: node.id,
      type: "conversation",
      prompt: node.data.prompt,
      isStart: node.data.isStart || false,
      metadata: { position: node.position },
    })),
    edges: edges.map((edge) => ({
      from: edge.source,
      to: edge.target,
      condition: {
        type: "ai",
        prompt: edge.data?.condition || "Default transition",
      },
    })),
  };

  const blob = new Blob([JSON.stringify(workflow, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "workflow.json";
  a.click();
  URL.revokeObjectURL(url);
};
