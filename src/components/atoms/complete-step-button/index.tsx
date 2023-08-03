import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useSorobanReact } from "@soroban-react/core";
import CoursesContext, { CoursesContextProps } from "../../../store/courses-context";
import { CourseData } from "interfaces/course-data";

interface CompleteStepButtonProps {
  title: string;
  courseId: number;
  progress: number;
}

export default function CompleteStepButton({
  title,
  courseId,
  progress,
}: CompleteStepButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { coursesData, updateProgress } = useContext<CoursesContextProps>(CoursesContext);
  const { address } = useSorobanReact();
  const publicKey = `${address}:${courseId}`;

  useEffect(() => {
    const course = coursesData.find((item: CourseData) => item.publickey === publicKey);
    const isStepCompleted = course && course.course_data.course_progress >= progress;
    setIsCompleted(!!isStepCompleted);
  }, []);

  const completeStepHandler = () => {
    setIsCompleted(true);
    updateProgress(publicKey, {
      publickey: address,
      course_index: courseId,
      course_progress: progress,
    });
  };

  return (
    <div className={styles.completeStep}>
      <button
        className={styles.completeStepButton}
        disabled={isCompleted}
        onClick={completeStepHandler}
      >
        {title}
      </button>
    </div>
  );
}
