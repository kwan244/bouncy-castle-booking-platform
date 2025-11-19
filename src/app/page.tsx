export default function HomePage() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-5xl px-4  py-16">
        {/*Hero Section*/}
        <section className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
          Bouncy Castle Hire
          </p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Make your party unforgettable 🎈
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Browse our range of safe, fun bouncy castles and book online in a few simple steps. Perfect for birthdays, school events and more.
          </p>

          <div className="mt-6 flex flex-wrap item-center gap-4">
            <a
              href="/castles"
              className="rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700"
            >
              Browse castles
              </a>
            <a
              href="/#how-it-works"
              className="text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
            >
              How it works
            </a>"
          </div>
        </section>

        {/*How it works section*/}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-slate-900">How it works</h2>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">1. Choose</p>
              <p className="mt-1 text-sm text-slate-600">
                Browse our bouncy castle by size, age range, and theme.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">2. Book</p>
              <p className="mt-1 text-sm text-slate-600">
                Select your date, time and event details so we can plan setup.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">3. Enjoy</p>
              <p className="mt-1 text-sm text-slate-600">
                We deliver, set up, and pack down. You focus on the fun.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}