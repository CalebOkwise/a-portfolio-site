"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container-width flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 transition hover:text-blue-600">
          Pete McPherson
        </Link>
        <nav aria-label="Main navigation">
          <ul className="m-0 flex list-none items-center gap-1 rounded-full border border-slate-200 bg-white/95 p-1 shadow-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname === item.href
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
