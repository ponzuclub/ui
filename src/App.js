import logo from './logo.svg';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>PonzuClub</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            Connect Wallet
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
