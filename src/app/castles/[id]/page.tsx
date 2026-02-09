import Link from "next/link";
import { notFound } from "next/navigation";
import type { BouncyCastle } from "@/types/bouncyCastle";

type CastleDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

async function getCastle(id: string): Promise<BouncyCastle | null> {
  const res = await fetch(`http://localhost:3000/api/castles/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch castle");
  }

  return res.json();
}

export default async function CastleDetailPage({
  params,
}: CastleDetailPageProps) {
  const { id } = await params;
  const castle = await getCastle(id);

  if (!castle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link
          href="/castles"
          className="text-sm font-medium text-sky-700 hover:underline underline-offset-4"
        >
          ← Back to all castles
        </Link>

        <section className="mt-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Bouncy Castle Hire
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            {castle.name}
          </h1>

          <p className="mt-3 text-lg text-slate-700">{castle.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-6">
            <div>
              <p className="text-sm text-slate-500">From</p>
              <p className="text-2xl font-bold text-slate-900">
                ${castle.pricePerDay}
                <span className="text-sm font-normal text-slate-500">
                  {" "}
                  / full day
                </span>
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              Book this castle
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">Size</p>
            <p className="mt-1 text-sm text-slate-700">{castle.size}</p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">Age range</p>
            <p className="mt-1 text-sm text-slate-700">{castle.ageRange}</p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">Type</p>
            <p className="mt-1 text-sm text-slate-700">Backyard inflatable</p>
          </div>
        </section>
      </div>
    </main>
  );
}
