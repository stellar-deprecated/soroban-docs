import { futurenet, sandbox, standalone, testnet } from "@soroban-react/chains";
import { SorobanReactProvider } from "@soroban-react/core";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";
import React, { PropsWithChildren, useContext, useEffect } from "react";
import CoursesContextProvider from "../store/CoursesContextProvider";
import CoursesContext, { CoursesContextProps } from "../store/courses-context";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './style.module.css';

const chains: ChainMetadata[] = [sandbox, futurenet, testnet, standalone];
const connectors: Connector[] = [freighter()];

const FetchDataWrapper = ({ children }: PropsWithChildren) => {
  const coursesCtx = useContext<CoursesContextProps>(CoursesContext);

  useEffect(() => {
    async function getCourses() {
      try {
        const response = await axios.get(
          "https://soroban-dapps-challenge-wrangler.julian-martinez.workers.dev",
        );

        coursesCtx.setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getCourses();
  }, []);

  return <>{children}</>;
};

export default function Root({ children }: PropsWithChildren) {
  return (
    <SorobanReactProvider
      autoconnect={false}
      chains={chains}
      connectors={connectors}
      appName={"course completion"}
    >
      <ToastContainer />
    
      <CoursesContextProvider>
        <FetchDataWrapper>
          {children}
        </FetchDataWrapper>
      </CoursesContextProvider>
    </SorobanReactProvider>
  );
}
