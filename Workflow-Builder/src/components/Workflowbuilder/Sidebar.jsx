import NodeEditor from "./NodeEditor";
import { exportWorkflow } from "./utils/exportWorkflow";

export default function Sidebar({
  nodes,
  edges,
  addNode,
  selectedNode,
  updateNodeData,
  deleteNode,
}) {
  return (
    <div style={{ width: 300, padding: 20, background: "#f5f5f5" }}>
      <button onClick={addNode} className="button green">
        Add Node
      </button>

      <button
        onClick={() => exportWorkflow(nodes, edges)}
        className="button blue"
      >
        Export JSON
      </button>

      <NodeEditor
        node={selectedNode}
        updateNodeData={updateNodeData}
        deleteNode={deleteNode}
      />
    </div>
  );
}
