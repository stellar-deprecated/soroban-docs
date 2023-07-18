import React, { useEffect, useState } from "react";
// import Layout from "@theme/Layout";

import { CardContainer } from "../src/components/molecules/card-container";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, futurenet];
const connectors: Connector[] = [freighter()];

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <SorobanReactProvider
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

function LoginComponent() {
  // Here you can use your hook
  const { address, activeChain } = useSorobanReact();
  const addressString: string = address ? address.toString() : "No address";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (activeChain) {
      setLoading(false);
      if (activeChain.name?.toString() !== "Futurenet" ) {
        alert("Please ensure that you are connected to Futurenet");
      }
    }
  }, [activeChain]);

  if (loading) {
    return <div style={{fontWeight: 'bold', fontSize: '18px'}}>
    Unsupported network detected. Please connect to Futurenet and refresh the page. </div>;
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
