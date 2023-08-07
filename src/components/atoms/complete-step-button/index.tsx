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
import CoursesContext, {
  CoursesContextProps,
} from "../../../store/courses-context";
import { getActiveCourse } from "../../../utils/get-active-course";

interface CompleteStepButtonState {
  isCompleted: boolean;
  isLastStep: boolean;
  isStarted: boolean;
}

interface CompleteStepButtonProps extends PropsWithChildren {
  type?: "button" | "submit";
  isDisabled?: boolean;
  courseId: number;
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
    const course = getActiveCourse(coursesData, publicKey);
    const isStepCompleted =
      !!course && course.course_data.course_progress >= progress;
    const isLastCourseStep = !!(course?.course_data.steps_amount === progress);

    setState((prevState: CompleteStepButtonState) => {
      return {
        isCompleted: isStepCompleted,
        isLastStep: isLastCourseStep,
        isStarted: !!course?.course_data.start_date,
      };
    });
  }, [coursesData, progress, publicKey]);

  const showToast = (template: JSX.Element) => {
    toast(template, {
      hideProgressBar: true,
      position: "top-center",
      autoClose: 2000,
    });
  };

  const lastStepHandler = () => {
    updateProgress({
      publickey: address,
      course_id: courseId,
      course_progress: progress,
      url,
      completed_at: Date.now(),
      is_completed: true,
    });
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
    updateProgress({
      publickey: address,
      course_id: courseId,
      course_progress: progress,
      url,
    });

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
