import Link from "next/link";
import lessons from "@/data/lessons.json";
import projects from "@/data/projects.json";
import { RoadmapDiagram } from "@/components/RoadmapDiagram";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const featuredLessons = lessons.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">AI Learning Platform</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Learn AI & Machine Learning From First Principles
        </h1>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          Master AI step-by-step with Python, Mathematics, and Machine Learning.
        </p>
        <p className="mt-5 text-sm font-medium text-slate-700 dark:text-slate-200">
          Python → Math → Machine Learning → Deep Learning → AI Systems
        </p>
        <Link href="/start-here" className="mt-6 inline-flex rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-500">
          Start Learning
        </Link>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">AI Learning Roadmap</h2>
        <RoadmapDiagram />
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured lessons</h2>
          <Link href="/lessons" className="text-sm text-brand-600">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredLessons.map((lesson) => (
            <article key={lesson.slug} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs text-brand-600">{lesson.stage}</p>
              <h3 className="mt-2 font-semibold">{lesson.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{lesson.summary}</p>
              <Link href={`/lessons/${lesson.slug}`} className="mt-3 inline-block text-sm text-brand-600">Open lesson →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm text-brand-600">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
