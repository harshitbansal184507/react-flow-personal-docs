export default function NodeEditor({ node, updateNodeData, deleteNode }) {
  if (!node)
    return (
      <div style={{ color: "#777", fontStyle: "italic" }}>
        Click a node to edit
      </div>
    );

  return (
    <div>
      <h3>Edit Node: {node.data.label}</h3>

      <label>Label:</label>
      <input
        type="text"
        value={node.data.label}
        onChange={(e) => updateNodeData("label", e.target.value)}
      />

      <label>Prompt:</label>
      <textarea
        rows={4}
        value={node.data.prompt}
        onChange={(e) => updateNodeData("prompt", e.target.value)}
      />

      <button
        onClick={deleteNode}
        style={{ background: "red", color: "white" }}
      >
        Delete Node
      </button>
    </div>
  );
}
