import styles from "./index.module.css";

interface Props {
  title: string;
  image: string;
}

export function GameCard({ title, image }: Props) {
  return (
    <article className={styles.gameCard}>
      <img src={image} alt={title} className={styles.gameCardImage} />
      <div className={styles.gameCardImageOverlay} />
      <h1 className={styles.gameCardTitle}>{title}</h1>
    </article>
  );
}
