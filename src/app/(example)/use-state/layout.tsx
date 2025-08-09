import { Counter } from "@/component/example/use-state/counter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Counter />
        <Counter />
        {children}
      </div>
    </>
  );
}
