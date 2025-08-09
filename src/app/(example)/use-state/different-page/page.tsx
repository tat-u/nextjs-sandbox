import Link from "next/link";
import { Counter } from "@/component/example/use-state/counter";

export default function Page() {
  return (
    <>
      <Counter />
      <Link href="/use-state">Go back</Link>
    </>
  );
}
