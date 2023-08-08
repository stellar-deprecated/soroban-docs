import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useSorobanReact } from "@soroban-react/core";
import { useReward } from "react-rewards";
import styles from "./styles.module.css";
import { AxiosResponse } from "axios";
import CoursesContext, {
  CoursesContextProps,
} from "../../../store/courses-context";
import { getActiveCourse } from "../../../utils/get-active-course";
import { CourseData, CoursePostData } from "../../../interfaces/course-data";
import { updateCourseProgress } from "../../../services/courses";

interface CompleteStepButtonState {
  isCompleted: boolean;
  isLastStep: boolean;
  isStarted: boolean;
}

interface CompleteStepButtonProps extends PropsWithChildren {
  type?: "button" | "submit";
  isDisabled?: boolean;
  courseId: string;
  progress: number;
  url?: string;
}

const milestoneToast = (
  <div className={styles.notification}>
    <img src="/img/smiley-face-1.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      Congratulations on your milestone!
    </span>
  </div>
);

const completedToast = (
  <div className={styles.notification}>
    <img src="/img/smiley-face-2.svg" alt="Smiley face" />
    <span className={styles.notificationText}>
      Congratulations! Your challenge is completed successfully.
    </span>
  </div>
);

export default function CompleteStepButton({
  type,
  isDisabled,
  children,
  courseId,
  progress,
  url,
}: CompleteStepButtonProps) {
  const [course, setCourse] = useState<CourseData | null>(null);
  const [state, setState] = useState<CompleteStepButtonState>({
    isCompleted: false,
    isLastStep: false,
    isStarted: false,
  });
  const { coursesData, updateProgress } =
    useContext<CoursesContextProps>(CoursesContext);
  const { address } = useSorobanReact();
  const { reward, isAnimating } = useReward(
    `reward${courseId}-${progress}`,
    "confetti",
    {
      elementCount: 150,
      zIndex: 10000,
      position: "absolute",
      angle: 90,
      lifetime: 300,
      colors: [
        "#FFD748",
        "#369EA7",
        "#FF6534",
        "#DF0101",
        "#34CEFF",
        "#AB56FF",
      ],
    },
  );

  const publicKey = `${address}:${courseId}`;
  const isButtonDisabled =
    (state.isCompleted && !state.isLastStep) || isDisabled || isAnimating;

  useEffect(() => {
    setCourse(getActiveCourse(coursesData, publicKey));
    const isStepCompleted =
      !!course && Number(course.courseData?.courseProgress) >= progress;
    const isLastCourseStep = !!(
      Number(course?.courseData?.milestonesAmount) === progress
    );

    setState((prevState: CompleteStepButtonState) => {
      return {
        isCompleted: isStepCompleted,
        isLastStep: isLastCourseStep,
        isStarted: !!course?.courseData?.startDate,
      };
    });
  }, [course, coursesData, progress, publicKey]);

  const showToast = (template: JSX.Element) => {
    toast(template, {
      hideProgressBar: true,
      position: "top-center",
      autoClose: 2000,
    });
  };

  const lastStepHandler = () => {
    const updatedItem: Partial<CoursePostData> = {
      publickey: address,
      courseId,
      courseProgress: String(progress),
      url,
      completedAt: String(Date.now()),
      startDate: course.courseData.startDate,
    };

    updateCourseProgress(updatedItem).then(
      (response: AxiosResponse<CourseData>) => updateProgress(response.data),
    );

    showToast(completedToast);
    reward();
  };

  const completeStepHandler = () => {
    if (state.isLastStep) {
      lastStepHandler();
      return;
    }

    setState((prevState: CompleteStepButtonState) => {
      return {
        ...prevState,
        isCompleted: true,
      };
    });

    const updatedItem: Partial<CoursePostData> = {
      publickey: address,
      courseId,
      courseProgress: String(progress),
      startDate: course.courseData.startDate,
    };

    updateCourseProgress(updatedItem).then(
      (response: AxiosResponse<CourseData>) => updateProgress(response.data),
    );

    showToast(milestoneToast);
  };

  return state.isStarted ? (
    <div className={styles.completeStep}>
      <button
        type={type || "button"}
        className={styles.completeStepButton}
        disabled={isButtonDisabled}
        onClick={completeStepHandler}
      >
        <span id={`reward${courseId}-${progress}`} />
        {children}
      </button>
    </div>
  ) : null;
}
