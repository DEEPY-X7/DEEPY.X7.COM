export default function StartHerePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Start Here</h1>
      <section>
        <h2 className="text-xl font-semibold">What is Artificial Intelligence</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Artificial Intelligence is the discipline of building systems that can perform tasks requiring reasoning, perception, and decision-making.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">What is Machine Learning</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Machine Learning is a subset of AI where models learn patterns from data instead of being explicitly programmed for every rule.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">How to learn using this platform</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Follow each stage in order: complete lessons, experiment with visualizations, and build projects to convert theory into practical skill.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Overview of the AI learning roadmap</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-600 dark:text-slate-300">
          <li>Python fundamentals for data and automation.</li>
          <li>Mathematics intuition: vectors, matrices, calculus, probability.</li>
          <li>Machine learning algorithms and evaluation.</li>
          <li>Deep learning architectures and optimization.</li>
          <li>AI systems design, deployment, and monitoring.</li>
        </ul>
      </section>
    </div>
  );
}
