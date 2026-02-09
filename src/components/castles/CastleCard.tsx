import Link from "next/link";
import type { BouncyCastle } from "@/types/bouncyCastle";

type Props = {
  castle: BouncyCastle;
};

export default function CastleCard({ castle }: Props) {
  return (
    <article className="rounded-xl bg-white p-4 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{castle.name}</h2>

      <p className="mt-1 text-sm text-slate-600">Size: {castle.size}</p>

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
  );
}
