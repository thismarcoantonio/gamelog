interface Props {
  cards: string[];
}

export function OnboardingCards({ cards }: Props) {
  return (
    <div>
      <img src={cards[0]} />
      <img src={cards[1]} />
      <img src={cards[2]} />
    </div>
  );
}
