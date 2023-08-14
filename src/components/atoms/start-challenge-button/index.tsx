import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import styles from "./style.module.css";
import useAuth from "../../../hooks/useAuth";
import UserChallengesContext, {
  UserChallengesContextProps,
} from "../../../store/user-challenges-context";
import { getActiveChallenge } from "../../../utils/get-active-challenge";
import {
  UserChallengeData,
  UpdateProgressData,
  UserProgress,
} from "../../../interfaces/challenge";
import {
  fetchUserProgress,
  updateUserProgress,
} from "../../../services/challenges";

interface StartChallengeButtonProps {
  id: number;
}

const startedToast = (
  <div className={styles.notification}>
    <img src="/icons/smiley-face-2.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      You’ve joined the challenge! Good luck!
    </span>
  </div>
);

export default function StartChallengeButton({
  id,
}: StartChallengeButtonProps) {
  const { address, isConnected, connectUser } = useAuth();
  const [isStarted, setIsStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setData, updateProgress } =
    useContext<UserChallengesContextProps>(UserChallengesContext);

  useEffect(() => {
    try {
      if (address) {
        setIsLoading(true);
        fetchUserProgress(address).then(
          (response: AxiosResponse<UserProgress>) => {
            const challenges = response.data.challenges || [];
            setData(challenges);
            const challenge = getActiveChallenge(challenges, id);
            setIsStarted(!!challenge?.startDate);
            setIsLoading(false);
          },
        );
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Fetching user progress failed!", error);
    }
  }, [address]);

  const startChallenge = () => {
    const updatedItem: UpdateProgressData = {
      userId: address,
      challengeId: id,
      challengeProgress: 0,
      startDate: Date.now(),
    };

    updateUserProgress(updatedItem).then(
      (response: AxiosResponse<UserChallengeData>) =>
        updateProgress(response.data.challenge),
    );
    toast(startedToast, {
      hideProgressBar: true,
      position: "top-center",
      autoClose: 2000,
    });
    setIsStarted(true);
  };

  return (
    <button
      className={styles.button}
      onClick={isConnected ? startChallenge : connectUser}
      disabled={isStarted || isLoading}
    >
      {isConnected ? "Start challenge" : "Login to start challenge"}
    </button>
  );
}
