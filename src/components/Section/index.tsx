import cn from "classnames";
import styles from "./index.module.css";

interface Props {
  title?: string;
  className?: string;
  noGutters?: boolean;
  children: React.ReactNode;
}

export function Section({ title, className, noGutters, children }: Props) {
  return (
    <section className={cn(styles.section, className, { [styles.sectionPadding]: !noGutters })}>
      <h1 className={cn(styles.title, { [styles.titlePadding]: noGutters })}>{title}</h1>
      {children}
    </section>
  );
}
