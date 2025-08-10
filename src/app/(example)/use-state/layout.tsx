import { Counter } from "@/component/example/use-state/counter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-100 grid grid-rows-3 border border-gray-200">
        <Counter />
        {children}
      </div>
    </>
  );
}
