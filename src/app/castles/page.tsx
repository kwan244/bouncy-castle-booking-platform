import Link from "next/link";
import { getAllCastles } from "@/data/castles";

export default function CastlesPage() {
    const castles = getAllCastles();

    return (
        <main className="min-h-screen bg-sky-50">
            <div className="mx-auto max-w-5xl px-4 py-12">
                <h1 className="text-3xl font-bold text-slate-900">
                    Browse bouncy castles
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                    This is demo data for now. Later we will load real castles from a database.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {castles.map((castle) => (
                        <article
                            key={castle.id}
                            className="rounded-xl bg-white p-4 shadow-sm"
                        >
                            <h2 className="text-xl font-semibold text-slate-900">
                                {castle.name}
                            </h2>

                            <p className="mt-1 text-sm text-slate-600">
                                Size: {castle.size}
                            </p>

                            <p className="mt-1 text-sm text-slate-600">
                                Age range: {castle.ageRange}
                            </p>

                            <p className="mt-3 text-base font-semibold text-sky-700">
                                ${castle.pricePerDay} / full day
                            </p>

                            <Link
                                href={`/castles/${castle.id}`}
                                className="mt-4 inline-block text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
                            >
                                View details
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}