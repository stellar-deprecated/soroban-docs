import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useSorobanReact } from "@soroban-react/core";
import { useReward } from "react-rewards";
import { AxiosResponse } from "axios";
import styles from "./styles.module.css";
import UserChallengesContext, {
  UserChallengesContextProps,
} from "../../../store/user-challenges-context";
import { getActiveChallenge } from "../../../utils/get-active-challenge";
import {
  UserChallengeData,
  ChallengeInfo,
  UpdateProgressData,
} from "../../../interfaces/challenge";
import { updateUserProgress } from "../../../services/challenges";

interface CompleteStepButtonState {
  isCompleted: boolean;
  isLastStep: boolean;
  isStarted: boolean;
}

interface CompleteStepButtonProps extends PropsWithChildren {
  type?: "button" | "submit";
  isDisabled?: boolean;
  id: number;
  progress: number;
  url?: string;
}

const milestoneToast = (
  <div className={styles.notification}>
    <img src="/icons/smiley-face-1.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      Congratulations on your milestone!
    </span>
  </div>
);

const completedToast = (
  <div className={styles.notification}>
    <img src="/icons/smiley-face-2.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      Congratulations! Your challenge is completed successfully.
    </span>
  </div>
);

export default function CompleteStepButton({
  type,
  isDisabled,
  children,
  id,
  progress,
  url,
}: CompleteStepButtonProps) {
  const [challenge, setChallenge] = useState<ChallengeInfo | null>(null);
  const [state, setState] = useState<CompleteStepButtonState>({
    isCompleted: false,
    isLastStep: false,
    isStarted: false,
  });
  const { data, updateProgress } = useContext<UserChallengesContextProps>(
    UserChallengesContext,
  );
  const { address } = useSorobanReact();
  const { reward, isAnimating } = useReward(
    `reward${id}-${progress}`,
    "confetti",
    {
      elementCount: 150,
      zIndex: 10000,
      position: "absolute",
      angle: 90,
      lifetime: 300,
      colors: [
        "#FFD748",
        "#369EA7",
        "#FF6534",
        "#DF0101",
        "#34CEFF",
        "#AB56FF",
      ],
    },
  );

  const isButtonDisabled =
    (state.isCompleted && !state.isLastStep) || isDisabled || isAnimating;

  useEffect(() => {
    setChallenge(getActiveChallenge(data, id));
    const isStepCompleted = !!challenge && challenge.progress >= progress;
    const isLastCourseStep = !!(challenge?.milestonesAmount === progress);

    setState((prevState: CompleteStepButtonState) => {
      return {
        isCompleted: isStepCompleted,
        isLastStep: isLastCourseStep,
        isStarted: !!challenge?.startDate,
      };
    });
  }, [challenge, data, progress, id]);

  const showToast = (template: JSX.Element) => {
    toast(template, {
      hideProgressBar: true,
      position: "top-center",
      autoClose: 2000,
    });
  };

  const lastStepHandler = () => {
    const updatedItem: UpdateProgressData = {
      userId: address,
      challengeId: id,
      challengeProgress: progress,
      url,
      completedAt: Date.now(),
      startDate: challenge.startDate,
    };

    updateUserProgress(updatedItem).then(
      (response: AxiosResponse<UserChallengeData>) =>
        updateProgress(response.data.challenge),
    );

    showToast(completedToast);
    reward();
  };

  const completeStepHandler = () => {
    if (state.isLastStep) {
      lastStepHandler();
      return;
    }

    setState((prevState: CompleteStepButtonState) => {
      return {
        ...prevState,
        isCompleted: true,
      };
    });

    const updatedItem: UpdateProgressData = {
      userId: address,
      challengeId: id,
      challengeProgress: progress,
      startDate: challenge.startDate,
    };

    updateUserProgress(updatedItem).then(
      (response: AxiosResponse<UserChallengeData>) =>
        updateProgress(response.data.challenge),
    );

    showToast(milestoneToast);
  };

  return state.isStarted ? (
    <div className={styles.completeStep}>
      <button
        type={type || "button"}
        className={styles.completeStepButton}
        disabled={isButtonDisabled}
        onClick={completeStepHandler}
      >
        <span id={`reward${id}-${progress}`} />
        {children}
      </button>
    </div>
  ) : null;
}
