import React, { useEffect, useState } from "react";
import { CardContainer } from "../card-container";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone, testnet } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";
import styles from "./style.module.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

const chains: ChainMetadata[] = [sandbox, futurenet, testnet, standalone];
const connectors: Connector[] = [freighter()];

function LoginComponent() {
  const { address, activeChain, connect } = useSorobanReact();
  const addressString = address ? address.toString() : "No address";
  const [loading, setLoading] = useState(true);
  const isConnected = localStorage.getItem("isConnected");

  // Check if the user is connected and stored the status in local storage
  useEffect(() => {
    if (isConnected === "true") {
      setLoading(false);
      connect(); // Call connect() to establish a connection if not already connected
    } else {
      setLoading(true);
      localStorage.setItem("isConnected", "false");
    }
  }, [connect]);

  useEffect(() => {
    if (activeChain) {
      if (activeChain.name?.toString() !== "Futurenet") {
        setLoading(true);
        alert("Please ensure that you are connected to Futurenet");
      }
      if (activeChain.name?.toString() === undefined) {
        setLoading(true);
        alert("Please ensure that you are connected to Futurenet");
      }
      if (activeChain.name?.toString() === "Futurenet") {
        setLoading(false);
        // Store the connection status in local storage
        localStorage.setItem("isConnected", "true");
      }
    }
  }, [activeChain]);

  const handleConnect = async () => {
    if (!address) {
      // If the user is not already connected, call connect()
      try {
        await connect();
        localStorage.setItem("isConnected", "true");
      } catch (error) {
        console.error("Error during connection:", error);
      }
    }
  };

  if (loading) {
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>
          Please connect to Futurenet and click the Connect button to continue.
        </p>
        <button className={styles.button} onClick={handleConnect}>
          Connect
        </button>
      </div>
    );
  }

  return (
    <main className="">
      <div
        className="hp--hero"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContainer addressHex={addressString} />
      </div>
    </main>
  );
}

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <SorobanReactProvider
      autoconnect={false}
      chains={chains}
      connectors={connectors}
      appName={"Login"}
    >
      <SorobanEventsProvider>
        {children}
        <BrowserOnly fallback={<div>Please connect to Futurenet and refresh the page to continue.</div>}>
          {() => <LoginComponent />}
          </BrowserOnly>
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}
