import { useEffect, useState } from "react";
import { useSorobanReact } from "@soroban-react/core";

const useAuth = () => {
  const { address, connect } = useSorobanReact();
  const [isConnected, setIsConnected] = useState(false);
  const addressString = address ? address.toString() : "No address";
  
  useEffect(() => {
    if (address) {
      localStorage.setItem(`isConnected:${address}`, "true");
    }
    const isConnectedFromStorage = localStorage.getItem(
      `isConnected:${addressString}`,
    );
    setIsConnected(!!isConnectedFromStorage);
  }, [address, addressString]);

  const loginUser = async () => {
    try {
      await connect();
      localStorage.setItem(`isConnected:${addressString}`, "true");
      const isConnectedFromStorage = localStorage.getItem(
        `isConnected:${addressString}`,
      );
      setIsConnected(!!isConnectedFromStorage);
    } catch (error) {
      console.error("Error during connection:", error);
    }
  };

  return { address, isConnected, loginUser };
};

export default useAuth;