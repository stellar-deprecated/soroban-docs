import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

interface CardProps {
  addressHex: string;
}

const getCompletedCourses = (address: string) => {
  // Mock for now.
  return [
    "Crowdfund Dapp: www.Crowdfund-dapp.vercel.com",
    "AMM Dapp: AMM-dapp.vercel.com",
    "Staking Dapp: Staking-dapp.vercel.com",
  ];
};

export function UserCard({ addressHex }: CardProps) {
  return (
    <div className={styles.card}>
      <h3>User Profile</h3>
      <p>{addressHex}</p>
    </div>
  );
}
