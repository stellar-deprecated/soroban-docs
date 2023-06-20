import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

interface CardProps {
  addressHex: string;
}

interface Course {
  publickey: string;
  url: string;
  completed: number[];
}

const fetchCourses = async (address: string): Promise<Course[]> => {
  try {
    const response = await fetch(
      "https://dapp-wrangler.julian-martinez.workers.dev/"
    );
    const data: Course[] = await response.json();

    return data.filter((course) => course.publickey === address);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function CompletedCoursesCard({ addressHex }: CardProps) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (addressHex) {
      fetchCourses(addressHex).then(setCourses);
    }
  }, [addressHex]);

  const deployedCourses = courses.filter(
    (course) => course.completed.length === 0
  );
  const completedCourses = courses.filter(
    (course) => course.completed.length > 0
  );

  const courseMapping: { [key: number]: string } = {
    0: "Crowdfund",
    1: "Payment",
    2: "Minting",
    3: "AMM",
    4: "Staking",
  };

  return (
    <div className={styles.card}>
      <h3>Completed Challenges</h3>
      <ul>
        {completedCourses.map((course, index) => (
          <li key={index}>
            <ul>
              {course.completed.map((courseId, innerIndex) => (
                <li key={innerIndex}>
                  {courseMapping[courseId] || `Unknown Course (${courseId})`}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
