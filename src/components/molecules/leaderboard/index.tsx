import React, { useState } from "react";
import { Leaderboard as LeaderboardI } from "../../../interfaces/challenge";
import {
  LeaderboardColumn,
  LeaderboardParams,
} from "../../../services/leaderboard";
import styles from "./style.module.css";

type Props = {
  userId?: string;
  list: LeaderboardI[];
  onColumnClick: (params: LeaderboardParams) => void;
};

const arrowDown = <span style={{ fontSize: "10px" }}>&#9660;</span>;
const arrowUp = <span style={{ fontSize: "10px" }}>&#9650;</span>;

const Leaderboard: React.FC<Props> = ({ userId, list, onColumnClick }) => {
  const [col, setCol] = useState<LeaderboardColumn | null>(null);
  const [asc, setAsc] = useState(true);

  const onClick = (val: LeaderboardColumn) => {
    const nextAsc = col === val ? !asc : false;
    setAsc(col === val ? !asc : false);
    onColumnClick({
      colName: val,
      direction: nextAsc ? "desc" : "asc",
    });
    setCol(val);
  };

  const onReset = () => {
    setAsc(true);
    setCol(null);
    onColumnClick({});
  };

  const arrow = asc ? arrowDown : arrowUp;

  return (
    <div className={styles.leaderboard}>
      <table className={styles.leadTable}>
        <thead className={styles.leadTableHead}>
          <tr>
            <th className={styles.leadTableHeadColumn} onClick={onReset}>
              Place
            </th>
            <th
              className={styles.leadTableHeadColumn}
              onClick={() => onClick(LeaderboardColumn.TotalValueLocked)}
            >
              TVL, $ {col === LeaderboardColumn.TotalValueLocked ? arrow : null}
            </th>
            <th
              className={styles.leadTableHeadColumn}
              onClick={() => onClick(LeaderboardColumn.ChallengesCompleted)}
            >
              Number of challenges{" "}
              {col === LeaderboardColumn.ChallengesCompleted ? arrow : null}
            </th>
            <th
              className={styles.leadTableHeadColumn}
              onClick={() => onClick(LeaderboardColumn.MinutesSpent)}
            >
              Minutes spent{" "}
              {col === LeaderboardColumn.MinutesSpent ? arrow : null}
            </th>
          </tr>
        </thead>
        <tbody className={styles.leadTableBody}>
          {list.map((item) => {
            const isCurrent = userId === item.userId;
            return (
              <tr
                key={item.userId}
                className={`${styles.leadTableBodyRow} ${
                  isCurrent ? styles.userRow : ""
                }`}
              >
                <td
                  className={`${styles.rankingCell} ${
                    isCurrent ? styles.userRankingCell : ""
                  }`}
                >
                  <div
                    className={`${styles.rankingCellNum} ${
                      isCurrent ? styles.userRankingCellNum : ""
                    }`}
                  >
                    {item.ranking.current}
                  </div>
                  {isCurrent ? (
                    <>
                      you are here!
                      <img src="/icons/icon-star-yellow.svg" alt="Star icon" />
                    </>
                  ) : null}
                </td>
                <td>{item.totalValueLocked}</td>
                <td>{item.challengesCompleted}</td>
                <td>{item.minutesSpent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
