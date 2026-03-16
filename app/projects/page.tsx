import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Machine Learning Projects</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Build end-to-end projects to apply your ML concepts in realistic workflows.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
