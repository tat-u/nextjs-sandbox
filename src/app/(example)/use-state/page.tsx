import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/use-state/different-page" className="row-start-3">
        Go to different page
      </Link>
    </>
  );
}
