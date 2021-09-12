import logo from "../logo512.png";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";
import { addArbitrumRPC } from "../hooks";
import { Link } from "react-router-dom";

function NavBar() {
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
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/governance">Governance</Nav.Link>
            <Nav.Link href="/space">Space</Nav.Link>
          </Nav>
          {chainId !== 42161 ? (
            <Button variant="secondary" onClick={handleSwitchNetwork(library)}>
              Switch to Arbitrum
            </Button>
          ) : null}
          {active ? (
            <span>
              Connected: <b>{account}</b>
            </span>
          ) : (
            <Button onClick={connect}>Connect to MetaMask</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
