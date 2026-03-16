import type { Metadata } from "next";
import { notFound } from "next/navigation";
import lessons from "@/data/lessons.json";
import { LessonLayout } from "@/components/LessonLayout";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const lesson = lessons.find((entry) => entry.slug === params.slug);
  if (!lesson) {
    return { title: "Lesson not found" };
  }
  return {
    title: `${lesson.title} | AI Learning Ecosystem`,
    description: lesson.summary
  };
}

export default function LessonPage({ params }: Params) {
  const lesson = lessons.find((entry) => entry.slug === params.slug);
  if (!lesson) notFound();
  return <LessonLayout lesson={lesson} />;
}
