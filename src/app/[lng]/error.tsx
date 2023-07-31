"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.log("error:", error);
  console.log("reset:", reset);
  return (
    <div>
      <h2>Something went wrong!</h2>
    </div>
  );
}
