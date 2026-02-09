"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  title: string;
  message: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryHref?: string;
  secondaryLabel?: string;
  digest?: string;
  error?: unknown;
};

export default function ErrorState({
  title,
  message,
  primaryActionLabel = "Try again",
  onPrimaryAction,
  secondaryHref,
  secondaryLabel,
  digest,
  error,
}: Props) {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-600">{message}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {onPrimaryAction ? (
            <button
              onClick={onPrimaryAction}
              className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              {primaryActionLabel}
            </button>
          ) : null}

          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>

        {digest ? (
          <p className="mt-6 text-xs text-slate-400">
            Error reference: {digest}
          </p>
        ) : null}
      </div>
    </main>
  );
}
