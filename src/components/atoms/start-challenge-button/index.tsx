import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import styles from "./style.module.css";
import useAuth from "../../../hooks/useAuth";
import CoursesContext, {
  CoursesContextProps,
} from "../../../store/courses-context";
import { getActiveCourse } from "../../../utils/get-active-course";
import { CourseData, CoursePostData } from "../../../interfaces/course-data";
import { updateCourseProgress } from "../../../services/courses";

interface StartChallengeButtonProps {
  courseId: string;
}

const startedToast = (
  <div className={styles.notification}>
    <img src="/img/smiley-face-2.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      You’ve joined the challenge! Good luck!
    </span>
  </div>
);

export default function StartChallengeButton({
  courseId,
}: StartChallengeButtonProps) {
  const { address, isConnected, loginUser } = useAuth();
  const [isStarted, setIsStarted] = useState(false);
  const { coursesData, updateProgress } =
    useContext<CoursesContextProps>(CoursesContext);
  const publicKey = `${address}:${courseId}`;

  useEffect(() => {
    const course = getActiveCourse(coursesData, publicKey);
    setIsStarted(!!course?.courseData?.startDate);
  }, [coursesData, publicKey]);

  const startChallenge = () => {
    const updatedItem: Partial<CoursePostData> = {
      publickey: address,
      courseId,
      courseProgress: "0",
      startDate: String(Date.now()),
    };

    updateCourseProgress(updatedItem).then(
      (response: AxiosResponse<CourseData>) => updateProgress(response.data),
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
      onClick={isConnected ? startChallenge : loginUser}
      disabled={isStarted}
    >
      {isConnected ? "Start challenge" : "Login to start challenge"}
    </button>
  );
}
