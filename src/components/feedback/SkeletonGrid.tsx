import SkeletonCard from "./SkeletonCard";

type Props = {
  count?: number;
};

export default function SkeletonGrid({ count = 6 }: Props) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
