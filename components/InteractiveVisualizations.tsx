"use client";

import { useMemo, useState } from "react";

type VisualizationType = "vector" | "dot" | "gradient" | "boundary";

export function InteractiveVisualization({ type }: { type: VisualizationType }) {
  if (type === "dot") return <DotProductVisualization />;
  if (type === "gradient") return <GradientDescentVisualization />;
  if (type === "boundary") return <DecisionBoundaryVisualization />;
  return <VectorVisualization />;
}

function VectorVisualization() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(4);
  const magnitude = Math.sqrt(x * x + y * y).toFixed(2);

  return (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <p className="font-medium">Vector visualization</p>
      <svg viewBox="0 0 240 160" className="mt-2 w-full rounded bg-slate-50 dark:bg-slate-900">
        <line x1="20" y1="140" x2="220" y2="140" stroke="#64748b" />
        <line x1="20" y1="140" x2="20" y2="20" stroke="#64748b" />
        <line x1="20" y1="140" x2={20 + x * 30} y2={140 - y * 20} stroke="#3d7cff" strokeWidth="4" />
        <circle cx={20 + x * 30} cy={140 - y * 20} r="5" fill="#3d7cff" />
      </svg>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <label>
          x: {x}
          <input type="range" min="0" max="6" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full" />
        </label>
        <label>
          y: {y}
          <input type="range" min="0" max="6" value={y} onChange={(e) => setY(Number(e.target.value))} className="w-full" />
        </label>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Magnitude: {magnitude}</p>
    </div>
  );
}

function DotProductVisualization() {
  const [angle, setAngle] = useState(30);
  const dot = useMemo(() => (Math.cos((angle * Math.PI) / 180) * 10).toFixed(2), [angle]);

  return (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <p className="font-medium">Dot product animation</p>
      <p className="mt-2 text-sm">Change angle between vectors: {angle}°</p>
      <input type="range" min="0" max="180" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="mt-2 w-full" />
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Dot product (scaled): {dot}</p>
    </div>
  );
}

function GradientDescentVisualization() {
  const [step, setStep] = useState(0.1);
  const values = useMemo(() => {
    let w = 6;
    const history: number[] = [];
    for (let i = 0; i < 8; i += 1) {
      const grad = 2 * w;
      w -= step * grad;
      history.push(Number(w.toFixed(3)));
    }
    return history;
  }, [step]);

  return (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <p className="font-medium">Gradient descent animation</p>
      <label className="mt-2 block text-sm">
        Learning rate: {step}
        <input type="range" min="0.05" max="0.5" step="0.05" value={step} onChange={(e) => setStep(Number(e.target.value))} className="w-full" />
      </label>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Parameter updates: {values.join(" → ")}</p>
    </div>
  );
}

function DecisionBoundaryVisualization() {
  const [threshold, setThreshold] = useState(50);
  return (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <p className="font-medium">Decision boundary visualization</p>
      <label className="mt-2 block text-sm">
        Boundary threshold: {threshold}
        <input type="range" min="20" max="80" value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} className="w-full" />
      </label>
      <div className="mt-3 grid grid-cols-10 gap-1">
        {Array.from({ length: 40 }).map((_, idx) => {
          const value = (idx * 3) % 100;
          const isClassA = value <= threshold;
          return <span key={idx} className={`h-4 rounded ${isClassA ? "bg-brand-500" : "bg-emerald-500"}`} />;
        })}
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Blue points: class A · Green points: class B.</p>
    </div>
  );
}
