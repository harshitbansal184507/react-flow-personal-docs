import React from "react";
import WorkflowBuilder from "./components/Workflowbuilder/Workflowbuilder";
import "reactflow/dist/style.css";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WorkflowBuilder />
    </div>
  );
}

export default App;
