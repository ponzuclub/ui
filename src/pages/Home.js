import logo from "../logo512.png";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";
import { addArbitrumRPC } from "../hooks";
import EthCard from "../components/EthCard";
import PonzuCard from "../components/PonzuCard";
import SLPCard from "../components/SLPCard";

function Home() {
  const { active, account, chainId, library, connector, activate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const handleSwitchNetwork = (library) => {
    addArbitrumRPC(library);
  };

  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            <Image src={logo} rounded />
          </Col>
          <Col>
            Welcome to ponzu.club! ponzu.club celebrates dipping sauces and
            smart contracts.
          </Col>
        </Row>
        <Row>
          <Col>
            <EthCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <PonzuCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <SLPCard
              title="PONZU-ETH LP Pool"
              slpTokenAddress="0x7ca483a96078fa311333515a64db1ca8e88af455"
              poolAddress="0x01B5e2A392Da78C8D42644272C4b7Adbfb84230B"
              link="https://app.sushi.com/add/ETH/0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35"
              linkText="Get PONZU-ETH SLP"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SLPCard
              title="PONZU-NYAN LP Pool"
              slpTokenAddress="0xc368c51ad7dc69ab6f7cdc5a498d18d15edaf325"
              poolAddress="0xd0d65a2250fc427a1021E938B39Ba73B3d7e5CC2"
              link="https://app.sushi.com/add/0xeD3fB761414DA74b74F33e5c5a1f78104b188DfC/0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35"
              linkText="Get PONZU-NYAN SLP"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <SLPCard
              title="PONZU-CARBON LP Pool"
              slpTokenAddress="0x57e5c019462a838ca7ee721389ad0f905393db18"
              poolAddress="0x516BEB71135EaE2AE0D627DfB05eEf93E637d3EB"
              link="https://app.sushi.com/add/0xfa42DA1bd08341537a44a4ca9D236D1c00A98b40/0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35"
              linkText="Get PONZU-CARBON SLP"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
