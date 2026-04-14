export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="container-width flex flex-col items-start justify-between gap-3 py-10 text-sm text-slate-600 md:flex-row md:items-center">
        <p className="font-medium text-slate-700">Helping brands grow with smarter marketing and faster websites.</p>
        <p>© {new Date().getFullYear()} Pete McPherson. Built for clarity and conversion.</p>
      </div>
    </footer>
  );
}
