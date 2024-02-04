import { Image } from "../Image";
import styles from "./index.module.css";

interface Props {
  image: string;
  title: string;
  dateRelease: string;
  dateCompleted: string;
}

export function GameRow({ image, title, dateRelease, dateCompleted }: Props) {
  return (
    <article className={styles.gameRow}>
      <Image src={image} className={styles.image} />
      <div>
        <h1>{title}</h1>
        <p>{dateRelease}</p>
        <p>{dateCompleted}</p>
      </div>
    </article>
  );
}
