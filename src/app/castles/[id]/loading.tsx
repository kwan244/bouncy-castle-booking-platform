import { SkeletonGrid } from "@/components";

export default function LoadingCastleDetailPage() {
  return (
    <main className="min-h-screen bg-sky-50">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="h-8 w-72 rounded bg-slate-200" />
        <div className="mt-2 h-4 w-96 rounded bg-slate-100" />
        <SkeletonGrid count={6} />
      </div>
    </main>
  );
}
