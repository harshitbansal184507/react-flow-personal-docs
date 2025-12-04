import { BaseEdge, getBezierPath } from "reactflow";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
  style,
  data,
}) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />

      {/* Delete Button */}
      <foreignObject
        width={30}
        height={30}
        x={labelX - 15}
        y={labelY - 15}
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            background: "white",
            borderRadius: "50%",
            border: "1px solid #999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "14px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            data?.onDelete(id);
          }}
        >
          ✕
        </div>
      </foreignObject>
    </>
  );
}
