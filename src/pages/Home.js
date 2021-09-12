import logo from '../logo512.png';
import { Button, Container, Row, Col, Image, Card, InputGroup, FormControl } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../connectors';
import { addArbitrumRPC } from '../hooks';
import EthCard from '../components/EthCard';
import PonzuCard from '../components/PonzuCard';
import SLPCard from '../components/SLPCard';

function Home() {
  const { active, account, chainId, library, connector, activate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const handleSwitchNetwork = (library) => {
      addArbitrumRPC(library);
  }

  return (
    <div className="Home">
        <Container>
        <Row>
          <Col>
            <Image src={logo} rounded />
          </Col>
          <Col>
            Welcome to ponzu.club! ponzu.club celebrates dipping sauces and smart contracts.
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
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Farm</Card.Header>
              <Card.Body>
                <Card.Title>PONZU-NYAN LP Pool</Card.Title>
                <Card.Text>
                  <a 
                    href="https://app.sushi.com/add/0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35/0xeD3fB761414DA74b74F33e5c5a1f78104b188DfC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GET PONZU-NYAN LP Tokens 
                  </a>
                </Card.Text>
                <Card.Text>
                  APR:
                </Card.Text>
                <Row>
                  <Col>
                    <Button variant="warning">Approve</Button>
                  </Col>
                  <Col>
                    <Button variant="primary">Stake</Button>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                  </Col>
                  <Col>
                    <Button variant="success">Max</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Farm</Card.Header>
              <Card.Body>
                <Card.Title>PONZU-CARBON LP Pool</Card.Title>
                  <a 
                    href="https://app.sushi.com/add/0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35/0xfa42DA1bd08341537a44a4ca9D236D1c00A98b40" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GET PONZU-ETH LP Tokens
                  </a>
                <Card.Text>
                  APR:
                </Card.Text>
                <Row>
                  <Col>
                    <Button variant="warning">Approve</Button>
                  </Col>
                  <Col>
                    <Button variant="primary">Stake</Button>
                  </Col>
                  <Col>
                    <InputGroup className="mb-3">
                      <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </InputGroup>
                  </Col>
                  <Col>
                    <Button variant="success">Max</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
