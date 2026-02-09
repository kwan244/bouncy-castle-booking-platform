"use client";

import { ErrorState } from "@/components";

export default function CastleDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorState
      title="Couldn’t load this castle"
      message="Please try again. If the problem keeps happening, go back to the list."
      onPrimaryAction={reset}
      secondaryHref="/castles"
      secondaryLabel="Back to castles"
      digest={error.digest}
      error={error}
    />
  );
}
