import { useMemo } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";

import NyanRewards_ABI from "./abis/NyanRewards.json";

export function useNyanRewards(withSigner = false) {
    const { library, account, chainId } = useWeb3React();
    return useMemo(
        () =>
            new Contract(
                "0xF6a37745FC911666132E8b8F29fC9c4F5C4a703D",
                NyanRewards_ABI,
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