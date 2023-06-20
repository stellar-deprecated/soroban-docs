import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

interface CardProps {
  addressHex: string;
}

interface Course {
  publickey: string;
  url: string[];
}

const fetchCourses = async (address: string): Promise<string[]> => {
  try {
    const response = await fetch(
      "https://dapp-wrangler.julian-martinez.workers.dev/"
    );
    const data: Course[] = await response.json();

    const filteredCourses = data.filter(
      (course) => course.publickey === address
    );

    return filteredCourses.flatMap((course) => course.url);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function DeployedProjectsCard({ addressHex }: CardProps) {
  const [deployments, setDeployments] = useState<string[]>([]);

  useEffect(() => {
    if (addressHex) {
      fetchCourses(addressHex).then((courses) => setDeployments(courses));
    }
  }, [addressHex]);

  return (
    <div className={styles.card}>
      <h3>Dapp Deployments</h3>
      <ul>
        {deployments.map((deployment, index) => (
          <li key={index}>
            <a href={deployment} target="_blank" rel="noopener noreferrer">
              {deployment}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
