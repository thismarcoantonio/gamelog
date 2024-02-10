import { Icon, IconTypes } from "../Icon";
import styles from "./index.module.css";

interface Props {
  gamePlatforms: string[];
  selectedPlatform?: string;
}

const platforms = ["pc", "playstation", "xbox", "nintendo"];

function getGamePlatforms(gamePlatforms: string[]) {
  return platforms.filter((platform) => gamePlatforms.some((gamePlatform) => gamePlatform.includes(platform)));
}

export function Platforms({ gamePlatforms, selectedPlatform }: Props) {
  console.log(selectedPlatform);
  return (
    <div className={styles.platforms}>
      {getGamePlatforms(gamePlatforms).map((platform) => (
        <Icon icon={platform as IconTypes} size={20} />
      ))}
    </div>
  );
}
