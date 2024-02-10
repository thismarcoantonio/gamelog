import { Image } from "../Image";
import { formatDate } from "../../utils/date";
import { Divider } from "../Divider";
import { Platforms } from "../Platforms";
import styles from "./index.module.css";

interface Props {
  image: string;
  title: string;
  dateRelease: string;
  dateCompleted: string;
  platforms: string[];
  selectedPlatform?: string;
}

export function GameRow({ image, title, dateRelease, dateCompleted, platforms, selectedPlatform }: Props) {
  return (
    <div>
      <article className={styles.gameRow}>
        <Image src={image} className={styles.image} />
        <div>
          <h1>{title}</h1>
          <Platforms gamePlatforms={platforms} selectedPlatform={selectedPlatform} />
          <p>Completed: {formatDate(dateCompleted)}</p>
          <p>Released: {formatDate(dateRelease)}</p>
        </div>
      </article>
      <Divider />
    </div>
  );
}
