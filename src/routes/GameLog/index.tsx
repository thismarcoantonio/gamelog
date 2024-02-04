import { GameLogHeading } from "./GameLogHeading";
import { Section } from "../../components/Section";
import styles from "./index.module.css";
import sample from "../../data/sample";

export function GameLog() {
  return (
    <div>
      <GameLogHeading image={sample.results[0].background_image} />
      <Section title="Currently playing" className={styles.currentlyPlaying} noGutters>
        Hello
      </Section>
      Gamelog
    </div>
  );
}
