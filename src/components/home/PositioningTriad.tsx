import React from "react";

/**
 * A closed triangular relationship, not a converge-to-a-point diagram: each
 * leg names the specific thing it carries, and the loop closes back into
 * Negócio rather than terminating — visualizing the continuous relationship
 * the section's own copy already claims ("menos ruído, mais inteligência"),
 * not a generic three-label connector. Desktop renders true SVG geometry;
 * mobile gets its own simpler vertical reading rather than a shrunk clone of
 * the same SVG, since text inside a scaled-down 960-wide viewBox would be
 * illegible at phone width.
 */
export function PositioningTriad() {
  return (
    <div aria-hidden="true">
      <svg
        viewBox="0 0 960 240"
        className="hidden sm:block w-full h-auto overflow-visible"
        fill="none"
      >
        <path d="M140,100 H480" className="draw-path stroke-brand" strokeWidth={1.5} pathLength={1} />
        <path d="M480,100 H820" className="draw-path stroke-brand" strokeWidth={1.5} pathLength={1} />
        <path
          d="M820,100 Q480,205 140,100"
          className="draw-path stroke-border-strong"
          strokeWidth={1.5}
          pathLength={1}
        />

        <text x="310" y="78" textAnchor="middle" fontSize="12" className="fill-muted">
          necessidades reais
        </text>
        <text x="650" y="78" textAnchor="middle" fontSize="12" className="fill-muted">
          sistemas concretos
        </text>
        <text x="480" y="222" textAnchor="middle" fontSize="12" className="fill-muted">
          resultados mensuráveis
        </text>

        <circle cx="140" cy="100" r="5" className="fill-bg stroke-brand" strokeWidth={2} />
        <circle cx="480" cy="100" r="5" className="fill-bg stroke-brand" strokeWidth={2} />
        <circle cx="820" cy="100" r="5" className="fill-bg stroke-brand" strokeWidth={2} />

        <text x="140" y="128" textAnchor="middle" fontSize="14" fontWeight={600} className="fill-primary">
          Negócio
        </text>
        <text x="480" y="128" textAnchor="middle" fontSize="14" fontWeight={600} className="fill-primary">
          Produto
        </text>
        <text x="820" y="128" textAnchor="middle" fontSize="14" fontWeight={600} className="fill-primary">
          Engenharia
        </text>
      </svg>

      {/* Mobile: the same closed relationship, read top-to-bottom instead of
          as small SVG text that would be illegible at this width. */}
      <div className="sm:hidden flex flex-col items-center">
        <span className="text-lg font-semibold text-primary">Negócio</span>
        <span className="my-1 h-6 w-px bg-border-strong" />
        <span className="text-xs text-muted">necessidades reais</span>
        <span className="my-1 h-6 w-px bg-border-strong" />
        <span className="text-lg font-semibold text-primary">Produto</span>
        <span className="my-1 h-6 w-px bg-border-strong" />
        <span className="text-xs text-muted">sistemas concretos</span>
        <span className="my-1 h-6 w-px bg-border-strong" />
        <span className="text-lg font-semibold text-primary">Engenharia</span>
        <span className="my-1 h-6 w-px bg-border-strong" />
        <span className="text-xs text-muted">resultados mensuráveis</span>
        <span className="mt-1 text-xs text-muted">— e o ciclo recomeça.</span>
      </div>
    </div>
  );
}
