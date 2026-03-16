import Link from "next/link";

const stages = [
  { id: "1", title: "Python for Machine Learning", href: "/lessons?stage=python" },
  { id: "2", title: "Mathematics for Machine Learning", href: "/lessons?stage=math" },
  { id: "3", title: "Machine Learning Algorithms", href: "/lessons?stage=ml" },
  { id: "4", title: "Deep Learning", href: "/lessons?stage=dl" },
  { id: "5", title: "AI Systems", href: "/lessons?stage=systems" }
];

export function RoadmapDiagram() {
  return (
    <div className="grid gap-4 sm:grid-cols-5">
      {stages.map((stage, index) => (
        <div key={stage.id} className="relative">
          <Link
            href={stage.href}
            className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900"
          >
            <span className="text-xs font-medium text-brand-600">Stage {stage.id}</span>
            <span className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{stage.title}</span>
          </Link>
          {index < stages.length - 1 && (
            <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-xl text-brand-500 sm:block">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
