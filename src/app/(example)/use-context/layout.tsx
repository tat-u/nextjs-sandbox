import { CounterProvider } from "@/component/example/use-context/counter-context";
import { Counter } from "@/component/example/use-context/counter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-100 grid grid-rows-2 border border-gray-200">
        <CounterProvider>
          <Counter />
          <CounterProvider>{children}</CounterProvider>
        </CounterProvider>
      </div>
    </>
  );
}
