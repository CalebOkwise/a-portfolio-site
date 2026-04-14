import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 pt-12 md:space-y-24 md:pt-16">
      <section className="container-width">
        <div className="card-surface soft-fade-in mx-auto max-w-4xl p-8 text-center md:p-12">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-800">
            Digital Marketing + Web Development
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            I help brands turn traffic into trust, leads, and revenue.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            I&apos;m Pete McPherson. I combine growth-focused marketing strategy with high-performance web development so
            every campaign and landing page works harder.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-blue-700"
            >
              See recent results
            </Link>
          </div>
        </div>
      </section>

      <section className="container-width">
        <div className="card-surface soft-fade-in-delay p-8 md:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Who I help and how I work</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            I work with founders, service businesses, and lean teams that need more than vanity metrics. The focus is
            simple: attract the right audience, improve conversion paths, and build web experiences that make your
            value clear in seconds.
          </p>
        </div>
      </section>

      <section className="container-width soft-fade-in">
        <NewsletterForm />
      </section>

      <section className="container-width soft-fade-in space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Featured projects</h2>
            <p className="mt-2 text-slate-600">A snapshot of conversion-focused work across marketing and development.</p>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-blue-700 transition hover:text-blue-800">
            View all projects
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
