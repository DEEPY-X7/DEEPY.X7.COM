import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

export function ProjectCard({ slug, title, summary, stack }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-2 py-1 text-xs dark:bg-slate-800 dark:text-slate-200">
            {item}
          </span>
        ))}
      </div>
      <Link href={`/projects/${slug}`} className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-500">
        Open project →
      </Link>
    </article>
  );
}
