import Link from "next/link";
import lessons from "@/data/lessons.json";

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Lessons</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Concept-driven lessons with code, intuition, and visual understanding.</p>
      <div className="mt-8 grid gap-4">
        {lessons.map((lesson) => (
          <article key={lesson.slug} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs text-brand-600">{lesson.stage}</p>
            <h2 className="mt-2 text-xl font-semibold">{lesson.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{lesson.summary}</p>
            <Link href={`/lessons/${lesson.slug}`} className="mt-3 inline-block text-sm font-medium text-brand-600">
              Open lesson →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
