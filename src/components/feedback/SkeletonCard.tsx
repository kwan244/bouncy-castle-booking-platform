type Props = {
  lines?: number;
};

export default function SkeletonCard({ lines = 3 }: Props) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <div className="h-6 w-2/3 rounded bg-slate-200" />
      <div className="mt-3 space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-4 w-full rounded bg-slate-100" />
        ))}
      </div>
      <div className="mt-6 h-5 w-24 rounded bg-slate-200" />
      <div className="mt-4 h-4 w-24 rounded bg-slate-100" />
    </div>
  );
}
