import { NewsletterForm } from "@/components/newsletter-form";

export default function AboutPage() {
  return (
    <div className="container-width space-y-14 pb-20 pt-14 md:space-y-16 md:pt-20">
      <section className="soft-fade-in max-w-3xl space-y-5">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">About Pete McPherson</h1>
        <p className="text-lg leading-relaxed text-slate-600">
          My work sits at the intersection of persuasive messaging, clean design, and technical execution. I help
          businesses communicate value clearly and convert more of the attention they already earn.
        </p>
      </section>

      <section className="soft-fade-in-delay grid gap-6 md:grid-cols-2">
        <article className="card-surface p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">The journey</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            I started in digital marketing, building growth campaigns and learning how fast audiences move. Over time,
            I saw the same issue again and again: strong traffic hitting weak web experiences. So I expanded into web
            development to close that gap and improve full-funnel performance.
          </p>
        </article>
        <article className="card-surface p-7">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">What I do</h2>
          <p className="mt-3 leading-relaxed text-slate-600">
            I build conversion-ready websites, landing pages, and content systems that support measurable growth. That
            includes strategy, messaging, UX structure, front-end implementation, and continuous optimization.
          </p>
        </article>
      </section>

      <section className="card-surface soft-fade-in p-8 md:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">My approach</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
          Great marketing does not just attract clicks. It aligns promise and experience. Every project is grounded in
          clarity, speed, and action: sharp positioning, lightweight pages, and calls-to-action that are impossible to
          miss. The goal is simple - make growth feel predictable.
        </p>
      </section>

      <NewsletterForm
        title="Join Pete's weekly growth memo"
        description="Every week, get practical ideas on conversion, positioning, and website performance you can apply fast."
      />
    </div>
  );
}
