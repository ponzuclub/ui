
import { Button, Container, Row, Col, Image, Card, InputGroup, FormControl } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';

function About() {

  return (
    <div className="Community">
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Contracts Info</Card.Header>
              <Card.Body>
                <Card.Title>Governance Contracts</Card.Title>
                <Card.Text>
                  Each Ponzu token has governing rights, and owners will have the final say of how the remaining 50% of Ponzu should be used.
                </Card.Text>
                <Card.Text>
                  Ponzu: <a href="https://arbiscan.io/address/0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35">0x7d2D35cF256cb47b8cAa6eB4d793f1c7e2228d35</a>
                </Card.Text>
                <Card.Text>
                  Timelock: <a href="https://arbiscan.io/address/0x1A5c344DB58b3d9094a1761272a27C08ba411eDa">0x1A5c344DB58b3d9094a1761272a27C08ba411eDa</a>
                </Card.Text>
                <Card.Text>
                  Delegate: <a href="https://arbiscan.io/address/0xd4722a14d0B73edB948E9c96Fa9278d8d870C673">0xd4722a14d0B73edB948E9c96Fa9278d8d870C673</a>
                </Card.Text>
                <Card.Text>
                  Delegator: <a href="https://arbiscan.io/address/0x0ff9eAb68d3A17258D90796d2B328008E7ac3587">0x0ff9eAb68d3A17258D90796d2B328008E7ac3587</a>
                </Card.Text>

                <br />
                <Card.Title>Reward Pools Contracts</Card.Title>
                <Card.Text>
                  RewardsPonzuPonzu: <a href="https://arbiscan.io/address/0xF6a37745FC911666132E8b8F29fC9c4F5C4a703D">0xF6a37745FC911666132E8b8F29fC9c4F5C4a703D</a>
                </Card.Text>
                <Card.Text>
                  RewardsPonzuETH: <a href="https://arbiscan.io/address/0x245E2775446684F50D22D11A7F4f63502a1B0c8C">0x245E2775446684F50D22D11A7F4f63502a1B0c8C</a>
                </Card.Text>
                <Card.Text>
                  RewardsPonzuSLP(PONZU/ETH): <a href="https://arbiscan.io/address/0x01B5e2A392Da78C8D42644272C4b7Adbfb84230B">0x01B5e2A392Da78C8D42644272C4b7Adbfb84230B</a>
                </Card.Text>
                <Card.Text>
                  RewardsPonzuSLP(PONZU/CARBON): <a href="https://arbiscan.io/address/0x516BEB71135EaE2AE0D627DfB05eEf93E637d3EB">0x516BEB71135EaE2AE0D627DfB05eEf93E637d3EB</a>
                </Card.Text>
                <Card.Text>
                  RewardsPonzuSLP(PONZU/NYAN): <a href="https://arbiscan.io/address/0xd0d65a2250fc427a1021E938B39Ba73B3d7e5CC2">0xd0d65a2250fc427a1021E938B39Ba73B3d7e5CC2</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Price Data</Card.Header>
              <Card.Body>
                <Card.Title>Links</Card.Title>
                <Card.Text>
                  <a href="https://www.defined.fi/arb/0x7ca483a96078fa311333515a64db1ca8e88af455">PONZU/ETH</a>
                </Card.Text>
                <Card.Text>
                  <a href="https://www.defined.fi/arb/0x57e5c019462a838ca7ee721389ad0f905393db18">PONZU/CARBON</a>
                </Card.Text>
                <Card.Text>
                  <a href="https://www.defined.fi/arb/0xc368c51ad7dc69ab6f7cdc5a498d18d15edaf325">PONZU/NYAN</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Tokenomics</Card.Header>
              <Card.Body>
                <Card.Title>Token Distribution</Card.Title>
                <Card.Text>
                  7% reserved for dev and early contributors (700,000)
                </Card.Text>
                <Card.Text>
                  4% in ETH pool, for 1 week (400,000)
                </Card.Text>
                <Card.Text>
                  8% in PONZU pool, for 2 months (800,000)
                </Card.Text>
                <Card.Text>
                  13% in PONZU/ETH pool, for 2 months (1,300,000)
                </Card.Text>
                <Card.Text>
                  9% in PONZU/NYAN pool, for 2 months (900,000)
                </Card.Text>
                <Card.Text>
                  9% in PONZU/CARBON pool, for 2 months (900,000)
                </Card.Text>
                <Card.Text>
                  50% locked in timelock for future deployments (5,000,000)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
