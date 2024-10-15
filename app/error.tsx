'use client';

export default function RootErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <h1>{error.message}</h1>;
}
