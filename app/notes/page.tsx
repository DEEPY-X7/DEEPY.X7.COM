import Link from "next/link";

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Notes</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Download the full Machine Learning Complete Notes covering Python for ML, Mathematics for ML, Machine Learning fundamentals, and AI concepts.
      </p>
      <Link href="/downloads/ml-complete-notes.pdf" className="inline-flex rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-500">
        Download Machine Learning Complete Notes (PDF)
      </Link>
    </div>
  );
}
