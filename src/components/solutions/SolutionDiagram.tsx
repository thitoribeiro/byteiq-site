import React from "react";

type DiagramKind = "node-path" | "mesh" | "stack" | "pipeline" | "arc";
type Accent = "ai" | "data" | "brand";

interface SolutionDiagramProps {
  kind: DiagramKind;
  accent: Accent;
  labels: string[];
}

const strokeClass: Record<Accent, string> = {
  ai: "stroke-ai-border",
  data: "stroke-data",
  brand: "stroke-brand",
};
const fillClass: Record<Accent, string> = {
  ai: "fill-ai-text",
  data: "fill-data-text",
  brand: "fill-brand-text",
};

/**
 * One shared technical foundation (viewBox, stroke weight, draw-in motion),
 * five genuinely different shapes — each one a literal reading of how that
 * solution's own pillars already describe its mechanism, not a decoration
 * applied after the fact. Server Component; motion is CSS-only via the
 * existing .draw-path/Reveal pattern built for the Home redesign.
 */
export function SolutionDiagram({ kind, accent, labels }: SolutionDiagramProps) {
  const stroke = strokeClass[accent];
  const fill = fillClass[accent];

  return (
    <div aria-hidden="true" className="w-full">
      <svg viewBox="0 0 440 200" className="w-full h-auto overflow-visible" fill="none">
        {kind === "node-path" && <NodePath stroke={stroke} fill={fill} labels={labels} />}
        {kind === "mesh" && <Mesh stroke={stroke} fill={fill} labels={labels} />}
        {kind === "stack" && <Stack stroke={stroke} fill={fill} labels={labels} />}
        {kind === "pipeline" && <Pipeline stroke={stroke} fill={fill} labels={labels} />}
        {kind === "arc" && <Arc stroke={stroke} fill={fill} labels={labels} />}
      </svg>
    </div>
  );
}

interface ShapeProps {
  stroke: string;
  fill: string;
  labels: string[];
}

const xs = [40, 160, 280, 400];

function NodePath({ stroke, fill, labels }: ShapeProps) {
  return (
    <>
      <path d={`M${xs[0]},100 H${xs[3]}`} className={`draw-path ${stroke}`} strokeWidth={1.5} pathLength={1} />
      {xs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={100} r={5} className={`fill-bg ${stroke}`} strokeWidth={2} />
          <text x={x} y={128} textAnchor="middle" fontSize="11" className={fill} fontWeight={600}>
            {labels[i]}
          </text>
        </g>
      ))}
    </>
  );
}

function Mesh({ stroke, fill, labels }: ShapeProps) {
  const center = { x: 220, y: 100 };
  const satellites = [
    { x: 70, y: 40 },
    { x: 370, y: 40 },
    { x: 70, y: 160 },
    { x: 370, y: 160 },
  ];
  return (
    <>
      {satellites.map((s, i) => (
        <path
          key={i}
          d={`M${center.x},${center.y} L${s.x},${s.y}`}
          className={`draw-path ${stroke}`}
          strokeWidth={1.5}
          pathLength={1}
        />
      ))}
      <circle cx={center.x} cy={center.y} r={6} className={`fill-bg ${stroke}`} strokeWidth={2} />
      {satellites.map((s, i) => (
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={4} className={`fill-bg ${stroke}`} strokeWidth={1.5} />
          <text
            x={s.x}
            y={s.y + (s.y < center.y ? -12 : 20)}
            textAnchor="middle"
            fontSize="10"
            className={fill}
            fontWeight={600}
          >
            {labels[i]}
          </text>
        </g>
      ))}
    </>
  );
}

function Stack({ stroke, fill, labels }: ShapeProps) {
  const ys = [50, 100, 150];
  return (
    <>
      <path d={`M70,${ys[0]} V${ys[2]}`} className={`draw-path ${stroke}`} strokeWidth={1.5} pathLength={1} />
      {ys.map((y, i) => (
        <g key={y}>
          <path d={`M70,${y} H340`} className={`draw-path ${stroke}`} strokeWidth={1.5} pathLength={1} />
          <circle cx={70} cy={y} r={4} className={`fill-bg ${stroke}`} strokeWidth={1.5} />
          <text x={88} y={y - 10} fontSize="11" className={fill} fontWeight={600}>
            {labels[i]}
          </text>
        </g>
      ))}
    </>
  );
}

function Pipeline({ stroke, fill, labels }: ShapeProps) {
  return (
    <>
      <path d={`M${xs[0]},100 H${xs[3]}`} className={`draw-path ${stroke}`} strokeWidth={1.5} pathLength={1} />
      {xs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={100} r={9} className="fill-bg" strokeWidth={1.5} />
          <circle cx={x} cy={100} r={9} className={stroke} fill="none" strokeWidth={1.5} />
          <path
            d={`M${x - 3.5},100 l2.5,3.5 l4.5,-6`}
            className={stroke}
            fill="none"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x={x} y={128} textAnchor="middle" fontSize="11" className={fill} fontWeight={600}>
            {labels[i]}
          </text>
        </g>
      ))}
    </>
  );
}

function Arc({ stroke, fill, labels }: ShapeProps) {
  const pts = [
    { x: 40, y: 150 },
    { x: 160, y: 65 },
    { x: 300, y: 65 },
    { x: 400, y: 150 },
  ];
  return (
    <>
      {pts.slice(0, -1).map((p, i) => {
        const n = pts[i + 1];
        const midY = Math.min(p.y, n.y) - 18;
        return (
          <path
            key={i}
            d={`M${p.x},${p.y} Q${(p.x + n.x) / 2},${midY} ${n.x},${n.y}`}
            className={`draw-path ${stroke}`}
            strokeWidth={1.5}
            pathLength={1}
          />
        );
      })}
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={5} className={`fill-bg ${stroke}`} strokeWidth={2} />
          <text x={p.x} y={p.y + 24} textAnchor="middle" fontSize="11" className={fill} fontWeight={600}>
            {labels[i]}
          </text>
        </g>
      ))}
    </>
  );
}
