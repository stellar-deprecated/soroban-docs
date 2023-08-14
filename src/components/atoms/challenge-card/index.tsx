import React from "react";
import styles from "./style.module.css";
import { iconBulb, iconWallet } from "./challenge-icons";
import { ChallengeInfo } from "../../../interfaces/challenge";

interface ChallengeCardProps {
  challenge: ChallengeInfo;
}

interface ChallengeConfig {
  icon: JSX.Element;
  route: string;
}

enum ActionBtnTitle {
  SEE_DETAILS = "See details",
  CONTINUE = "Continue",
  COMPLETED = "Completed",
}

const challengeConfig: { [key: string]: ChallengeConfig } = {
  0: {
    icon: iconBulb,
    route: "/dapps/dapp-challenges/challenge-0-crowdfund",
  },
  1: {
    icon: iconWallet,
    route: "/dapps/dapp-challenges/challenge-1-payment",
  },
};
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function ChallengeCard({ challenge }: ChallengeCardProps) {
  const { id, name, milestonesAmount: totalSteps } = challenge;
  let actionBtnTitle: ActionBtnTitle = ActionBtnTitle.SEE_DETAILS;
  let displayDate: string;
  const progressValue = (Number(challenge.progress) * 100) / totalSteps || 0;

  if (challenge.startDate) {
    const date = new Date(Number(challenge.startDate));
    const month = months[date.getMonth()];
    const day = date.getDay();
    const year = date.getFullYear();

    actionBtnTitle = ActionBtnTitle.CONTINUE;
    displayDate = `Started on ${month}, ${day}, ${year}`;
  }

  if (challenge.completedAt) {
    const date = new Date(Number(challenge.completedAt));
    const month = months[date.getMonth()];
    const day = date.getDay();
    const year = date.getFullYear();

    actionBtnTitle = ActionBtnTitle.COMPLETED;
    displayDate = `Completed on ${month}, ${day}, ${year}`;
  }

  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        {challengeConfig[id].icon}

        <div className={styles.progress}>{progressValue.toFixed()}/100%</div>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{name}</p>

        <div className={styles.progressbar}>
          <div
            className={styles.progressLine}
            style={{ width: `${progressValue.toFixed()}%` }}
          />
          <div className={styles.slider} />
        </div>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.date}>{displayDate}</span>

        <a
          className={styles.action}
          href={challengeConfig[id].route}
          aria-disabled={actionBtnTitle === ActionBtnTitle.COMPLETED}
        >
          {actionBtnTitle}
        </a>
      </div>
    </li>
  );
}
