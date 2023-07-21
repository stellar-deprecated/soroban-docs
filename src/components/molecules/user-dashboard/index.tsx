import React, { useEffect, useState } from "react";
import { CardContainer } from "../card-container";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone, testnet } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";
import styles from "./style.module.css";

const chains: ChainMetadata[] = [sandbox, futurenet, testnet, standalone];
const connectors: Connector[] = [freighter()];

function LoginComponent() {
  const { address, activeChain, connect } = useSorobanReact();
  const addressString = address ? address.toString() : "No address";
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

    // useEffect(() => {
  //   const checkConnection = async () => {
  //     try {
  //       await connect();
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error during connection:", error);
  //       setLoading(true);
  //     }
  //   };
  //   checkConnection();
  // }, [connect]);


  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error("Error during connection:", error);
    }
  };

  if (loading) {
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>
          {" "}
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
        <LoginComponent />
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}
