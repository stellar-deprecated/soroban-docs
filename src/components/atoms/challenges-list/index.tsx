import React, { useMemo, useState } from "react";
import styles from "./style.module.css";
import { Challenge, ChallengeInfo } from "../../../interfaces/challenge";
import { ChallengeCard } from "../challenge-card";
import Switcher from "../UI/switcher";

interface Props {
  availableChallenges: Challenge[];
  userChallenges: ChallengeInfo[];
  onRefresh: () => void;
}

export default function ChallengeList({
  availableChallenges,
  userChallenges,
  onRefresh,
}: Props) {
  const [onlyMine, setOnlyMine] = useState(false);

  const myChallanges = (
    <>
      {userChallenges?.length ? (
        userChallenges?.map((challenge: ChallengeInfo) => {
          return <ChallengeCard challenge={challenge} key={challenge.id} />;
        })
      ) : (
        <p>You haven't completed any challenges yet.</p>
      )}
    </>
  );

  const allChallenges = useMemo(
    () =>
      availableChallenges?.map((aChall: Challenge) => {
        const inProgressChallenge = userChallenges.find(
          (uChall: ChallengeInfo) => uChall.id === aChall.id,
        );

        if (inProgressChallenge) {
          return (
            <ChallengeCard
              key={inProgressChallenge.id}
              challenge={inProgressChallenge}
            />
          );
        }

        return <ChallengeCard key={aChall.id} challenge={aChall} />;
      }),
    [availableChallenges, userChallenges],
  );

  return (
    <>
      <div className={styles.listHeader}>
        {userChallenges?.length > 0 ? (
          <Switcher
            id="challengesFilter"
            labelText="Show my challenges"
            onChange={(value: boolean) => setOnlyMine(value)}
          />
        ) : null}
        <button className={styles.refreshBtn} onClick={onRefresh}>
          Refresh
        </button>
      </div>

      <ul className={styles.challengeCards}>
        {onlyMine ? myChallanges : allChallenges}
      </ul>
    </>
  );
}
