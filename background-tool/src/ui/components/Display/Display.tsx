import styles from "@/ui/components/Display/Display.module.css";
import { CSSProperties } from "react";

export function Display({ cssProps }: { cssProps: CSSProperties }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display} style={cssProps}></div>
    </div>
  );
}
