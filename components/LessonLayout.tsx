import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { InteractiveVisualization } from "@/components/InteractiveVisualizations";

type Lesson = {
  title: string;
  stage: string;
  summary: string;
  code: string;
  intuition: string;
  youtubeId: string;
  downloadUrl: string;
  visualization: "vector" | "dot" | "gradient" | "boundary";
};

export function LessonLayout({ lesson }: { lesson: Lesson }) {
  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6">
      <header>
        <p className="text-sm font-medium text-brand-600">{lesson.stage}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{lesson.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{lesson.summary}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Concept explanation</h2>
        <p className="text-slate-600 dark:text-slate-300">{lesson.intuition}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Visualization</h2>
        <InteractiveVisualization type={lesson.visualization} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Python code example</h2>
        <CodeBlock code={lesson.code} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Machine learning intuition</h2>
        <p className="text-slate-600 dark:text-slate-300">Focus on how this concept maps to model behavior, optimization, and decisions.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Video lesson</h2>
        <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <iframe
            title={`${lesson.title} video`}
            src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </section>

      <Link href={lesson.downloadUrl} className="inline-flex rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-500">
        Download notes
      </Link>
    </article>
  );
}
