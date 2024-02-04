import { OnboardingCards } from "./OnboardingCards";
import onboarding01 from "../assets/onboarding-01.jpg";
import onboarding02 from "../assets/onboarding-02.jpg";
import onboarding03 from "../assets/onboarding-03.jpg";
import onboarding04 from "../assets/onboarding-04.jpg";
import onboarding05 from "../assets/onboarding-05.jpg";
import onboarding06 from "../assets/onboarding-06.jpg";
import onboarding07 from "../assets/onboarding-07.jpg";
import onboarding08 from "../assets/onboarding-08.jpg";
import onboarding09 from "../assets/onboarding-09.jpg";
import { Navigate } from "react-router-dom";

const onboardingCardImages = [
  onboarding01,
  onboarding02,
  onboarding03,
  onboarding04,
  onboarding05,
  onboarding06,
  onboarding07,
  onboarding08,
  onboarding09,
];

const steps = [
  {
    title: "Track your gaming history",
    description:
      "Retrieve historical data of your gaming adventure, uncovering insights from the games you've completed.",
  },
  {
    title: "Data direct from RAWG",
    description:
      "Your gaming data comes straight from Rawg, a trusted source for comprehensive gaming information. Immerse yourself in details about your completed games, powered by Rawg's extensive database.",
  },
  {
    title: "Personalize Your Experience",
    description:
      "To get started, enter your RAWG username. This step ensures that the information presented is uniquely yours, offering a personalized and accurate reflection of your gaming history.",
  },
];

export function Onboarding() {
  const hasProfileUsername = true;
  if (hasProfileUsername) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <OnboardingCards cards={onboardingCardImages} />
      <div>
        {steps.map((step) => (
          <div>
            <h1>{step.title}</h1>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
