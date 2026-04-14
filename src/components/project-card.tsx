import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-surface group overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-50 to-white px-6 text-center text-sm font-medium text-slate-700">
        {project.imageLabel}
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
        <p className="leading-relaxed text-slate-600">{project.description}</p>
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">{project.results}</p>
        {project.link ? (
          <Link
            href={project.link}
            className="inline-flex items-center text-sm font-semibold text-blue-700 transition group-hover:translate-x-0.5 group-hover:text-blue-800"
          >
            View project
          </Link>
        ) : null}
      </div>
    </article>
  );
}
