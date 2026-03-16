type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "python" }: CodeBlockProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-950 p-4 text-sm shadow-sm dark:border-slate-700">
      <p className="mb-2 text-xs uppercase tracking-wide text-brand-100">{language}</p>
      <pre className="overflow-x-auto text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
