import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone, testnet } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, futurenet, testnet, standalone];
const connectors: Connector[] = [freighter()];

interface ChallengeFormProps {
  courseId: number;
  address?: string;
}

function ChallengeForm2({ address, courseId }: ChallengeFormProps) {
  const [url, setUrl] = useState("");
  const [courseIdState] = useState(courseId);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!url.includes(".vercel.app")) {
        alert('URL must contain ".vercel.app" to complete the checkpoint.');
        return;
      }

      const response = await fetch(
        "https://soroban-dapps-challenge-wrangler.sdf-ecosystem.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            publickey: address,
            url: url,
            course_index: [courseIdState],
          }),
        },
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

  // Show the form if it's not submitted successfully
  if (!isSubmittedSuccessfully) {
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
      </div>
    );
  }

  // Show the clickable entry if the form is submitted successfully
  return (
    <div>
      <p className={styles.success}>Challenge Complete! Dapp deployed to: <a href={url}>{url}</a></p>
    </div>
  );
}

function InnerComponent({ courseId }: { courseId: number }) {
  const { address, connect, activeChain } = useSorobanReact();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeChain) {
      setLoading(false);
      if (activeChain.name?.toString() !== "Futurenet") {
        alert("Please ensure that you are connected to Futurenet");
        setLoading(true);
      }
      if (activeChain.name?.toString() === undefined) {
        alert("Please ensure that you are connected to Futurenet");
        setLoading(true);
      }
      if (activeChain.name?.toString() === "Futurenet") {
        setLoading(false);
      }
    }
  }, [activeChain]);

  // if user is not logged in (address is undefined), render the Login button
  if (loading) {
    return (
      <div style={{ fontWeight: "bold" }}>
        Please connect to Futurenet and click the Connect button to continue.
        <br />
        <br />
        <button onClick={() => connect()} className={styles.button}>
          Connect
        </button>
      </div>
    );
  }
  // if user is logged in and connected to the right network, render the ChallengeForm
  return <ChallengeForm2 address={address} courseId={courseId} />;
}

export function ParentChallengeForm({ courseId }: { courseId: number }) {
  return (
    <SorobanReactProvider
      autoconnect={false}
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
