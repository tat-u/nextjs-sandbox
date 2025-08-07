import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>This is page B</div>
      <Link href="/example/use-state/a">Go to Page A</Link>
    </div>
  );
}
