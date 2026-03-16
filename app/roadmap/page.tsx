import { RoadmapDiagram } from "@/components/RoadmapDiagram";

const stageDetails = [
  "Stage 1 — Python for Machine Learning",
  "Stage 2 — Mathematics for Machine Learning",
  "Stage 3 — Machine Learning Algorithms",
  "Stage 4 — Deep Learning",
  "Stage 5 — AI Systems"
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">AI Learning Roadmap</h1>
      <p className="text-slate-600 dark:text-slate-300">A structured path from foundations to advanced AI systems engineering.</p>
      <RoadmapDiagram />
      <div className="grid gap-3">
        {stageDetails.map((stage) => (
          <p key={stage} className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            {stage}
          </p>
        ))}
      </div>
    </div>
  );
}
