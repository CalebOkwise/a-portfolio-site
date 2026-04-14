import { ProjectCard } from "@/components/project-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { featuredProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="container-width space-y-14 pb-20 pt-14 md:space-y-16 md:pt-20">
      <section className="soft-fade-in max-w-3xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Projects that drive outcomes</h1>
        <p className="text-lg leading-relaxed text-slate-600">
          A selected set of projects focused on growth. The goal in every engagement is to create experiences that are
          fast, clear, and designed to move people to action.
        </p>
      </section>

      <section className="soft-fade-in-delay grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <div className="soft-fade-in">
        <NewsletterForm
        title="Get weekly growth breakdowns"
        description="Join marketers and founders getting one practical idea each week on conversion strategy and web execution."
        />
      </div>
    </div>
  );
}
