import React from "react";
import Layout from "@theme/Layout";

import { CardContainer } from "../components/molecules/card-container";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, standalone, futurenet];
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
        <Layout>
          <LoginComponent />
        </Layout>
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}

function LoginComponent() {
  // Here you can use your hook
  const { address } = useSorobanReact();
  const addressString: string = address ? address.toString() : "No address";

  return (
    <main className="login">
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
