const mockCastles = [
    {
        id: "rainbow-bouncer",
        name: "Rainbow Bouncer",
        size: "4m x 4m x 3m",
        ageRange: "3-10 years",
        priceFullday: 220,
    },
    {
        id: "princess-palace",
        name: "Princess Palace",
        size: "5m x 4m x 4m",
        ageRange: "4-12 years",
        priceFullday: 260,
    },
    {
        id: "jungle-jump",
        name: "Jungle Jump",
        size: "6m x 5m x 4m",
        ageRange: "5-12 years",
        priceFullday: 300,
    },
];

export default function CastlesPage() {
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
                    {mockCastles.map((castle) => (
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
                                ${castle.priceFullday} / full day
                            </p>

                            <a
                                href={`/castles/${castle.id}`}
                                className="mt-4 inline-block text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
                            >
                                View details
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}