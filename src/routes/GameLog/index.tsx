import { GameLogHeading } from "./GameLogHeading";
import sample from "../../data/sample";

export function GameLog() {
  return (
    <div>
      <GameLogHeading image={sample.results[0].background_image} />
      Gamelog
    </div>
  );
}
