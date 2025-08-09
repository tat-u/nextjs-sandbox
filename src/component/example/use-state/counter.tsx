"use client";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span className="block">{count}</span>
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Press to increment
      </button>
    </div>
  );
}
