import { GameLogHeading } from "./GameLogHeading";
import { Section } from "../../components/Section";
import { GameCard } from "../../components/GameCard";
import { GameRow } from "../../components/GameRow";
import { useData } from "../../hooks/useData";
import styles from "./index.module.css";
import sample from "../../data/sample";
import { VirtualList } from "../../components/VirtualList";

export function GameLog() {
  const { playingResults, completedResults } = useData();

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
      {!!completedResults?.results.length && (
        <Section title="Completed" className={styles.completed}>
          <VirtualList>
            {completedResults.results.map((result) => (
              <GameRow key={result.id} title={result.name} image={result.image} dateRelease={result.released} dateCompleted={result.released} />
            ))}
          </VirtualList>
        </Section>
      )}
    </div>
  );
}
