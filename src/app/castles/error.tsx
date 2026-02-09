"use client";

import { ErrorState } from "@/components";

export default function CastlesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorState
      title="Couldn’t load castles"
      message="Something went wrong while fetching bouncy castles. Please try again."
      onPrimaryAction={reset}
      secondaryHref="/"
      secondaryLabel="Back home"
      digest={error.digest}
      error={error}
    />
  );
}
