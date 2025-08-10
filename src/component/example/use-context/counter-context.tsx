"use client";
import { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext value={{ count, increment }}>{children}</CounterContext>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
