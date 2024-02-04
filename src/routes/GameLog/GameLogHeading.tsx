import styles from "./GameLogHeading.module.css";

interface Props {
  image: string;
}

export function GameLogHeading({ image }: Props) {
  return (
    <div className={styles.heading}>
      <div className={styles.imageOverlay} />
      <img src={image} className={styles.image} />
    </div>
  );
}
