import Link from "next/link";
import styles from "@/ui/components/TopNav/TopNav.module.css";

export function TopNav() {
  return (
    <>
      <ul className={styles.top_nav}>
        <Link href="/" className={styles.link}>
          <li>Paper</li>
        </Link>
        <Link href="/boxes" className={styles.link}>
          <li>Boxes</li>
        </Link>
      </ul>
    </>
  );
}
