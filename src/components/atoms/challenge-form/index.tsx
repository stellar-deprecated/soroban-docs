import React, {
  useState,
  useEffect,
  useContext,
  ChangeEvent,
  FormEvent,
} from "react";
import { useSorobanReact } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./style.module.css";
import CompleteStepButton from "../complete-step-button";
import CoursesContext, {
  CoursesContextProps,
} from "../../../store/courses-context";
import { getActiveCourse } from "../../../utils/get-active-course";

interface ChallengeFormProps {
  courseId: number;
  address?: string;
}

function ChallengeForm2({ address, courseId }: ChallengeFormProps) {
  const [savedUrl, setSavedUrl] = useState("");
  const [url, setUrl] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { coursesData } = useContext<CoursesContextProps>(CoursesContext);

  useEffect(() => {
    if (address) {
      const publicKey = `${address}:${courseId}`;
      const course = getActiveCourse(coursesData, publicKey);
      setSavedUrl(course?.course_data.url || "");
      setIsStarted(!!course?.course_data.start_date);
    }
  }, [address, savedUrl, coursesData, courseId]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmittedSuccessfully(true);
  };

  const isValidUrl = (urlString: string): boolean => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isVercelApp = inputValue.includes(".vercel.app");

    setFormError(null);

    if (!isValidUrl(inputValue)) {
      setFormError("Please enter a valid url");
      return;
    }

    if (!isVercelApp) {
      setFormError("URL should contain .vercel.app to complete the checkpoint");
    } else {
      setUrl(inputValue);
    }
  };

  const blurHandler = () => {
    if (!url) {
      setFormError("Mandatory field");
    }
  };

  if (!isStarted) {
    return (
      <>
        <strong>
          Start the challenge to track your progress and submit the url.
        </strong>
        <br />
      </>
    );
  }

  // Show the form if it's not submitted successfully
  if (!isSubmittedSuccessfully) {
    return (
      <div>
        {savedUrl ? (
          <p className={styles.success}>
            Challenge completed! Your DApp is deployed to:
            <a href={savedUrl}>{savedUrl}</a>
          </p>
        ) : null}

        <form className={styles.challengeform} onSubmit={handleSubmit}>
          <input
            className={
              formError
                ? `${styles.input} ${styles.inputWithError}`
                : styles.input
            }
            type="url"
            placeholder="Enter your public url"
            onChange={changeHandler}
            onBlur={blurHandler}
            required
          />

          <CompleteStepButton
            type="submit"
            isDisabled={!url}
            courseId={courseId}
            progress={3}
            url={url}
          >
            {savedUrl ? "Re-submit" : "Submit url"}
          </CompleteStepButton>
        </form>
        <span className={styles.errorMessage}>{formError}</span>
      </div>
    );
  }

  // Show the clickable entry if the form is submitted successfully
  return (
    <div>
      <p className={styles.success}>
        Challenge Completed! DApp deployed to: <a href={url}>{url}</a>
      </p>
    </div>
  );
}

function InnerComponent({ courseId }: { courseId: number }) {
  const { address, connect, activeChain } = useSorobanReact();
  const addressString = address ? address.toString() : "No address";
  const [loading, setLoading] = useState(true);

  // Check if the user is connected and stored the status in local storage
  useEffect(() => {
    const isConnected = localStorage.getItem(`isConnected:${addressString}`);
    if (isConnected === "true") {
      setLoading(false);
      connect(); // Call connect() to establish a connection if not already connected
    } else {
      setLoading(true);
    }
  }, [connect]);

  useEffect(() => {
    if (activeChain) {
      if (activeChain.name?.toString() !== "Futurenet") {
        alert("Please ensure that you are connected to Futurenet");
        setLoading(true);
      }
      if (activeChain.name?.toString() === undefined) {
        alert("Please ensure that you are connected to Futurenet");
        setLoading(true);
      }
      if (activeChain.name?.toString() === "Futurenet" && address) {
        setLoading(false);
      }
    }
  }, [activeChain]);

  // if user is not logged in (address is undefined), render the Login button
  if (loading) {
    return (
      <div style={{ fontWeight: "bold" }}>
        Please connect to Futurenet network.
        <br />
      </div>
    );
  }
  // if user is logged in and connected to the right network, render the ChallengeForm
  return <ChallengeForm2 address={address} courseId={courseId} />;
}

export function ParentChallengeForm({ courseId }: { courseId: number }) {
  return (
    <SorobanEventsProvider>
      <BrowserOnly fallback={<div>Please connect to Futurenet network.</div>}>
        {() => <InnerComponent courseId={courseId} />}
      </BrowserOnly>
    </SorobanEventsProvider>
  );
}
