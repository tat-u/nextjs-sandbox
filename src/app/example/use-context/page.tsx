"use client";

import { CounterContext } from "@/context/CounterContext";
import { useContext } from "react";

function ChildComponent() {
  const count = useContext(CounterContext);
  return <div>Count: {count}</div>;
}

export default function Page() {
  return (
    <div>
      {/* TIPS: In React v19, <SomeContext /> can be used instead of <SomeContext.Provider> */}
      {/* TIPS: defaultValue of createContext is used when a component is not wrapped in a Provider */}
      <CounterContext value={100}>
        <ChildComponent />
      </CounterContext>
    </div>
  );
}
