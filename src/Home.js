import logo from './logo512.png';
import { Button, Navbar, Container, Row, Col, Image } from 'react-bootstrap';
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
            <Navbar.Brand>PonzuClub</Navbar.Brand>
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
                Welcome to Ponzu Club
            </Col>
            <Col>
                
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Home;
