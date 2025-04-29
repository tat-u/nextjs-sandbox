import styles from "@/ui/components/CodeBlock/CodeBlock.module.css";

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className={styles.pre}>
      <code>{code}</code>
    </pre>
  );
}
