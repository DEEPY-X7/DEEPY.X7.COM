import { notFound } from "next/navigation";
import projects from "@/data/projects.json";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((entry) => entry.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6">
      <header>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{project.summary}</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold">Problem statement</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{project.problem}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Dataset description</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{project.dataset}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Model implementation</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{project.implementation}</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Results and visualization</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{project.results}</p>
      </section>
    </article>
  );
}
