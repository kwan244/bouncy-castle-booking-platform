        "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="border-b bg-white/90 shadow-sm backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-base font-semibold text-slate-900">
                    {siteConfig.name}
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
                    {siteConfig.nav.map((link) => {
                        const isActive =
                            link.href === "/"
                                ? pathname === link.href
                                : pathname?.startsWith(link.href);

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`transition hover:text-slate-900 ${isActive ? "text-slate-900" : ""}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
