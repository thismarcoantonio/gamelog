import { GameLogHeading } from "./GameLogHeading";
import { Section } from "../../components/Section";
import { GameCard } from "../../components/GameCard";
import { GameRow } from "../../components/GameRow";
import { useData } from "../../hooks/useData";
import { VirtualList } from "../../components/VirtualList";
import { Loading } from "../../components/Loading";
import styles from "./index.module.css";

export function GameLog() {
  const { playingResults, completedResults, loading } = useData();

  return (
    <div>
      <GameLogHeading image={completedResults?.results[0].image ?? ""} />
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
        <Section title={`Completed (${completedResults.count})`} className={styles.completed}>
          <VirtualList>
            {completedResults!.results.map((result) => (
              <GameRow
                key={result.id}
                title={result.name}
                image={result.image}
                dateRelease={result.released}
                dateCompleted={result.user.added}
                platforms={result.platforms}
                selectedPlatform={result.user.platform}
              />
            ))}
          </VirtualList>
        </Section>
      )}
      {loading && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </div>
  );
}
