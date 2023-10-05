import { useContext, useMemo, useState } from "react";

import {
  ISupportedWallet,
  StellarWalletsKit,
  WalletNetwork,
  WalletType,
} from "stellar-wallets-kit";
import { toast } from "react-toastify";

import UserChallengesContext, {
  UserChallengesContextProps,
} from "../store/user-challenges-context";

export const FUTURENET_DETAILS = {
  network: "FUTURENET",
  networkUrl: "https://horizon-futurenet.stellar.org",
  networkPassphrase: "Test SDF Future Network ; October 2022",
};

const useAuth = () => {
  const { address, setAddress } = useContext<UserChallengesContextProps>(
    UserChallengesContext,
  );

  const [loading, setLoading] = useState(false);
  const [selectedNetwork] = useState(FUTURENET_DETAILS);

  const SWKKit = useMemo(
    () =>
      new StellarWalletsKit({
        network: selectedNetwork.networkPassphrase as WalletNetwork,
        selectedWallet: WalletType.FREIGHTER,
      }),
    [selectedNetwork],
  );

  const disconnect = () => {
    setAddress("");
  };

  const connect = async (type: ISupportedWallet["type"]) => {
    try {
      setLoading(true);
      SWKKit.setWallet(type);
      const publicKey = await SWKKit.getPublicKey();

      SWKKit.setNetwork(WalletNetwork.FUTURENET);

      // store to context
      setAddress(publicKey as string);

      setLoading(false);

      return true;
    } catch (e) {
      console.error("Connection error", e);

      toast("Connection error!", {
        type: "error",
        hideProgressBar: true,
        position: "top-center",
        autoClose: 2000,
      });
      return false;
    }
  };

  const onConnectWallet = () => {
    // See https://github.com/Creit-Tech/Stellar-Wallets-Kit/tree/main for more options
    SWKKit.openModal({
      allowedWallets: [
        WalletType.ALBEDO,
        WalletType.FREIGHTER,
        WalletType.XBULL,
        // TODO uncomment when working
        // WalletType.RABET,
        // WalletType.WALLET_CONNECT,
      ],
      onWalletSelected: async (option: ISupportedWallet) => {
        await connect(option.type);
      },
    });
  };

  return {
    address,
    isConnected: !!address,
    loading,
    connect: onConnectWallet,
    disconnect,
  };
};

export default useAuth;
