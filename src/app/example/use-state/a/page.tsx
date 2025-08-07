import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>This is page A</div>
      <Link href="/example/use-state/b">Go to Page B</Link>
    </div>
  );
}
