import { siteConfig } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white/90 text-sm text-slate-600">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-medium text-slate-900">{siteConfig.footerTagline}</p>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
