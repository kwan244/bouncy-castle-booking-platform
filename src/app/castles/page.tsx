import type { BouncyCastle } from "@/types/bouncyCastle";
import { CastleCard } from "@/components";

async function getCastles(): Promise<BouncyCastle[]> {
  const res = await fetch("http://localhost:3000/api/castles", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch castles");
  }

  return res.json();
}

export default async function CastlesPage() {
  const castles = await getCastles();

  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">
          Browse bouncy castles
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Choose a castle for your next event.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {castles.map((castle) => (
            <CastleCard key={castle.id} castle={castle} />
          ))}
        </div>
      </div>
    </main>
  );
}
