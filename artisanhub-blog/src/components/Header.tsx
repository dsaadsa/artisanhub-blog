"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "首页" },
  { href: "/works", label: "作品" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-md">
      <div className="apple-container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-wide text-[#1D1D1F]"
        >
          ArtisanHub
        </Link>
        <nav className="flex items-center gap-5 text-[13px]">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors duration-300",
                  active ? "text-[#1D1D1F]" : "text-[#86868B] hover:text-[#1D1D1F]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

