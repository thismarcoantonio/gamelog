import { Image } from "../Image";
import { Divider } from "../Divider";
import styles from "./index.module.css";
import { formatDate } from "../../utils/date";

interface Props {
  image: string;
  title: string;
  dateRelease: string;
  dateCompleted: string;
}

export function GameRow({ image, title, dateRelease, dateCompleted }: Props) {
  return (
    <div>
      <article className={styles.gameRow}>
        <Image src={image} className={styles.image} />
        <div>
          <h1>{title}</h1>
          <p>Completed: {formatDate(dateCompleted)}</p>
          <p>Released: {formatDate(dateRelease)}</p>
        </div>
      </article>
      <Divider />
    </div>
  );
}
