import cn from "classnames";
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
  return (
    <div className={styles.platforms}>
      {getGamePlatforms(gamePlatforms).map((platform) => (
        <Icon
          key={platform}
          icon={platform as IconTypes}
          size={20}
          className={cn({ [styles.inactivePlatform]: !selectedPlatform?.includes(platform) })}
        />
      ))}
    </div>
  );
}
