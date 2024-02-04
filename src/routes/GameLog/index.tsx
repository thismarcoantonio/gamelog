import { Fragment } from "react";
import { GameLogHeading } from "./GameLogHeading";
import { Section } from "../../components/Section";
import { GameCard } from "../../components/GameCard";
import styles from "./index.module.css";
import sample from "../../data/sample";
import { GameRow } from "../../components/GameRow";
import { Divider } from "../../components/Divider";

export function GameLog() {
  return (
    <div>
      <GameLogHeading image={sample.results[0].background_image} />
      <Section title="Currently playing" className={styles.currentlyPlaying} noGutters>
        {/* TODO: Remove this slice when we get real data */}
        <div className={styles.currentlyPlayingResults}>
          {sample.results.slice(0, 4).map((result) => (
            <GameCard title={result.name} image={result.background_image} key={result.id} />
          ))}
        </div>
      </Section>
      <Section title="Completed" className={styles.completed}>
        {sample.results.map((result, index) => (
          <Fragment key={result.id}>
            {index > 0 && <Divider />}
            <GameRow title={result.name} image={result.background_image} dateRelease={result.released} dateCompleted={result.user_game.added} />
          </Fragment>
        ))}
      </Section>
    </div>
  );
}
