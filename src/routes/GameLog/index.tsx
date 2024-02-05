import { Fragment } from "react";
import { GameLogHeading } from "./GameLogHeading";
import { Section } from "../../components/Section";
import { GameCard } from "../../components/GameCard";
import { GameRow } from "../../components/GameRow";
import { Divider } from "../../components/Divider";
import { useData } from "../../hooks/useData";
import styles from "./index.module.css";
import sample from "../../data/sample";

export function GameLog() {
  const { playingResults } = useData();

  return (
    <div>
      <GameLogHeading image={sample.results[0].background_image} />
      {!!playingResults?.results.length && (
        <Section title={`Currently playing (${playingResults.count})`} className={styles.currentlyPlaying} noGutters>
          <div className={styles.currentlyPlayingResults}>
            {playingResults?.results.map((result) => (
              <GameCard title={result.name} image={result.image} key={result.id} />
            ))}
          </div>
        </Section>
      )}
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
