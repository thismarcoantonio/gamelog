import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  cards: string[];
  step: number;
}

export function OnboardingCards({ cards, step }: Props) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const cardImages = cards.map((card) => {
      const image = new Image();
      image.src = card;
      return image.src;
    });
    setImages(cardImages);
  }, [cards]);

  return (
    <div className={styles.cards}>
      {images.slice(step * 3, 3 * (step + 1)).map((card) => (
        <div className={styles.card} key={card}>
          <img className={styles.cardImage} src={card} />
        </div>
      ))}
    </div>
  );
}
