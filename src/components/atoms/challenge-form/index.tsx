import React, { useState } from "react";
import styles from "./style.module.css";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, standalone, futurenet];
const connectors: Connector[] = [freighter()];

interface ChallengeFormProps {
  courseId: number[];
  address?: string;
}

function ChallengeForm2({ address, courseId }: ChallengeFormProps) {
  const [url, setUrl] = useState("");
  const [courseIdState, setCourseId] = useState(courseId);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://dapp-wrangler.julian-martinez.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            publickey: address,
            url: url,
            completed: [courseIdState],
          }),
        }
      );

      if (response.ok) {
        // Request succeeded, handle the response
        const data = response;
        console.log(data);
        setIsSubmittedSuccessfully(true);
      } else {
        // Request failed, handle the error
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      // Handle or log the error here
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.challengeform}>
        <label>
          Public URL:
          <input
            className={styles.input}
            type="url"
            value={url}
            onChange={(e) => {
              const url = e.target.value;
              setUrl(url);
              console.log("URL:", url);
              console.log("Public Key:", address);
            }}
            required
          />
        </label>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      <br />
      {isSubmittedSuccessfully && (
        <p className={styles.success}>Challenge Complete!</p>
      )}
    </div>
  );
}

export function ParentChallengeForm({ courseId }: { courseId: number[] }) {
  return (
    <SorobanReactProvider
      chains={chains}
      connectors={connectors}
      appName={"course completion"}
    >
      <SorobanEventsProvider>
        <InnerComponent courseId={courseId} />
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}
function InnerComponent({ courseId }: { courseId: number[] }) {
  const { address, connect } = useSorobanReact();

  // if user is not logged in (address is undefined), render the Login button
  if (!address) {
    return (
      <button onClick={() => connect()} className={styles.button}>
        Login
      </button>
    );
  }

  // if user is logged in, render the ChallengeForm
  return <ChallengeForm2 address={address} courseId={courseId} />;
}
