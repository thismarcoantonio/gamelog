import { useState, useMemo } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import cn from "classnames";
import { OnboardingCards } from "./OnboardingCards";
import styles from "./index.module.css";
import onboarding01 from "../../assets/onboarding-01.jpg";
import onboarding02 from "../../assets/onboarding-02.jpg";
import onboarding03 from "../../assets/onboarding-03.jpg";
import onboarding04 from "../../assets/onboarding-04.jpg";
import onboarding05 from "../../assets/onboarding-05.jpg";
import onboarding06 from "../../assets/onboarding-06.jpg";
import onboarding07 from "../../assets/onboarding-07.jpg";
import onboarding08 from "../../assets/onboarding-08.jpg";
import onboarding09 from "../../assets/onboarding-09.jpg";
import { useData } from "../../hooks/useData";

const onboardingCardImages = [onboarding01, onboarding02, onboarding03, onboarding04, onboarding05, onboarding06, onboarding07, onboarding08, onboarding09];

const steps = [
  {
    title: "Track your gaming history",
    description: "Retrieve historical data of your gaming adventure, uncovering insights from the games you've completed.",
  },
  {
    title: "Data direct from RAWG",
    description: "Your gaming data comes straight from RAWG, a trusted website for comprehensive gaming information.",
  },
  {
    title: "Personalize Your Experience",
    description: "To get started, enter your RAWG username. This step ensures that the information presented is uniquely yours.",
  },
];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const data = useData();

  const activeStep = useMemo(() => {
    return steps[step];
  }, [step]);

  const isFinalStep = useMemo(() => {
    return step === steps.length - 1;
  }, [step]);

  if (data.username) {
    return <Navigate to="/" />;
  }

  const handleContinue = () => {
    if (isFinalStep) {
      data.updateUsername(username);
      return navigate({ pathname: "/" });
    }
    return setStep((step) => step + 1);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
  };

  return (
    <div className={styles.onboarding}>
      <OnboardingCards cards={onboardingCardImages} step={step} />
      <div>
        <div>
          <h1 className={styles.title}>{activeStep.title}</h1>
          <p className={styles.description}>{activeStep.description}</p>
        </div>
      </div>
      {isFinalStep && <input placeholder="Username" className={styles.input} onChange={handleInput} />}
      <div className={styles.ellipsisProgress}>
        {steps.map((_, index) => (
          <span
            key={index}
            className={cn(styles.ellipsis, {
              [styles.ellipsisActive]: step === index,
            })}
          />
        ))}
      </div>
      <button onClick={handleContinue} className={styles.button} disabled={isFinalStep && !username}>
        {isFinalStep ? "Finish" : "Continue"}
      </button>
    </div>
  );
}
