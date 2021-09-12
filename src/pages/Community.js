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

function Community() {
  return (
    <div className="Community">
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Connect with Ponzu Lovers</Card.Header>
              <Card.Body>
                <Card.Title>Links</Card.Title>
                <Card.Text>
                  Discord:{" "}
                  <a href="https://discord.gg/Byw8cp2RJv">
                    https://discord.gg/Byw8cp2RJv
                  </a>
                </Card.Text>
                <Card.Text>
                  Twitter:{" "}
                  <a href="https://twitter.com/arbiponzuclub">
                    https://twitter.com/arbiponzuclub
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Community;
