import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSorobanReact } from "@soroban-react/core";
import { CourseData } from "interfaces/course-data";
import styles from "./styles.module.css";
import CoursesContext, {
  CoursesContextProps,
} from "../../../store/courses-context";

interface CompleteStepButtonProps {
  title: string;
  courseId: number;
  progress: number;
}

const milestoneToast = (
  <div className={styles.notification}>
    <img src="/img/smiley-face-1.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      Congratulations on your milestone!
    </span>
  </div>
);

export default function CompleteStepButton({
  title,
  courseId,
  progress,
}: CompleteStepButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { coursesData, updateProgress } =
    useContext<CoursesContextProps>(CoursesContext);
  const { address } = useSorobanReact();
  const publicKey = `${address}:${courseId}`;

  useEffect(() => {
    const course = coursesData.find(
      (item: CourseData) => item.publickey === publicKey,
    );
    const isStepCompleted =
      course && course.course_data.course_progress >= progress;
    setIsCompleted(!!isStepCompleted);
  }, [coursesData, progress, publicKey]);

  const completeStepHandler = () => {
    setIsCompleted(true);
    updateProgress(publicKey, {
      publickey: address,
      course_index: courseId,
      course_progress: progress,
    });

    toast(milestoneToast, {
      hideProgressBar: true,
      position: "top-center",
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
