import { useMemo } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";

import NyanRewards_ABI from "./abis/NyanRewards.json";
import PonzuToken_ABI from "./abis/PonzuToken.json";
import ERC20_ABI from "./abis/ERC20.json";

export function useNyanRewards(address, withSigner = false) {
  const { library, account, chainId } = useWeb3React();
  return useMemo(
    () =>
      new Contract(
        address,
        NyanRewards_ABI,
        withSigner ? library?.getSigner(account).connectUnchecked() : library
      ),
      [withSigner, library, account]
  );
}

export function usePonzu(withSigner = false) {
  const { library, account, chainId } = useWeb3React();
  return useMemo(
    () =>
      new Contract(
        "0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35",
        PonzuToken_ABI,
        withSigner ? library?.getSigner(account).connectUnchecked() : library
      ),
      [withSigner, library, account]
  );
}

export function useERC20(address, withSigner = false) {
  const { library, account, chainId } = useWeb3React();
  return useMemo(
    () =>
      new Contract(
        address,
        ERC20_ABI,
        withSigner ? library?.getSigner(account).connectUnchecked() : library
      ),
      [withSigner, library, account]
  );
}

export function addArbitrumRPC(library) {
  if (!!library) {
    library.provider.request({
      jsonrpc: "2.0",
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0xA4B1",
          chainName: "Arbitrum",
          rpcUrls: ["https://arb1.arbitrum.io/rpc"],
          nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
          },
          blockExplorerUrls: ["https://arbiscan.io"],
        },
      ],
      id: 0,
    });
  } else {
    if (window.ethereum) {
      let web3 = new Web3Provider(window.ethereum);
      try {
        window.ethereum.enable().then(function() {
          web3.provider.request({
            jsonrpc: "2.0",
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0xA4B1",
                chainName: "Arbitrum",
                rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://arbiscan.io"],
              },
            ],
            id: 0,
          });
        });
      } catch (e) {
        console.error(e)
      }
    }
    else {
      alert("You have to install Metamask");
    }
  }
}
