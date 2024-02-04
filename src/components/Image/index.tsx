import cn from "classnames";
import styles from "./index.module.css";

interface Props {
  src: string;
  className?: string;
}

export function Image({ src, className }: Props) {
  return (
    <div className={cn(styles.imageWrapper, className)}>
      <img className={styles.image} src={src} />
    </div>
  );
}
