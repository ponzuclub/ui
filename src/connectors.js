import { NetworkConnector } from "@web3-react/network-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

export const INFURA_PREFIXES = {
  42161: "arbitrum",
};

export function getNetwork(defaultChainId = 42161) {
  return new NetworkConnector({
    urls: [42161].reduce(
      (urls, chainId) =>
        Object.assign(urls, {
          [chainId]: `https://${INFURA_PREFIXES[chainId]}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
        }),
      {}
    ),
    defaultChainId,
  });
}

export const injected = new InjectedConnector({
  supportedChainIds: [42161],
});
