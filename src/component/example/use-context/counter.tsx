"use client";
import { useCounter } from "./counter-context";

export function Counter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <span className="block">{count}</span>
      <button type="button" className="cursor-pointer" onClick={increment}>
        Press to increment
      </button>
    </div>
  );
}
