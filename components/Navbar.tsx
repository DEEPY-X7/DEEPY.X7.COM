import Link from "next/link";

const links = [
  { href: "/start-here", label: "Start Here" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/lessons", label: "Lessons" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          AI Learning Ecosystem
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
