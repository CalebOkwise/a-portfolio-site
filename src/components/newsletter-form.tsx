type NewsletterFormProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function NewsletterForm({
  title = "Get weekly marketing insights",
  description = "Short, practical breakdowns on growth strategy, conversion optimization, and web performance.",
  compact = false
}: NewsletterFormProps) {
  return (
    <section className="card-surface bg-gradient-to-br from-white to-blue-50/40 p-6 md:p-8">
      <div className={compact ? "space-y-4" : "mx-auto max-w-2xl space-y-4 text-center"}>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
        <p className="text-slate-600">{description}</p>
        <form className="flex flex-col gap-3 sm:flex-row" action="#" method="post">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
          <button
            type="submit"
            className="h-12 rounded-xl bg-blue-600 px-6 font-medium text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
