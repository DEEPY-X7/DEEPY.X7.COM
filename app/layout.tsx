import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AI Learning Ecosystem",
  description:
    "Learn AI and machine learning from scratch with a structured roadmap: Python, math, ML, deep learning, and AI systems.",
  keywords: [
    "Machine Learning from Scratch",
    "AI Learning Roadmap",
    "Python for Machine Learning",
    "Math for Machine Learning"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
