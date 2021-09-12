import logo from './logo512.png';
import { Button, Card, Navbar, Container, Row, Col, Image, FormControl, InputGroup } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { injected } from './connectors';
import { addArbitrumRPC } from './hooks';

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
        <Navbar>
        <Container>
            <Navbar.Brand>ponzu.club</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            {chainId != 42161 ? <Button variant="secondary" onClick={handleSwitchNetwork(library)}>Switch to Arbitrum</Button> : null}
            {active ? <span>Connected with <b>{account}</b></span> : <Button onClick={connect}>Connect to MetaMask</Button>}
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <Container>
        <Row>
            <Col xs={1} md={1}>
            <Image src={logo} rounded />
            </Col>
            <Col>
                Welcome to ponzu.club
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <Card.Header as="h5">Farm</Card.Header>
                    <Card.Body>
                        <Card.Title>ETH Pool</Card.Title>
                        <Card.Text>
                            APR:
                        </Card.Text>
                        <Row>
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
                        <Card.Title>NYAN-PONZU LP Pool</Card.Title>
                        <Card.Text>
                            APR:
                        </Card.Text>
                        <Row>
                            <Col>
                                <Button variant="primary">Add</Button>
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
                        <Card.Title>PONZU LP Pool</Card.Title>
                        <Card.Text>
                            APR:
                        </Card.Text>
                        <Row>
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
