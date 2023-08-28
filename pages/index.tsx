import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center vh-100 w-100"
      fluid
    >
      <Row>
        <Col>QUESTIONS GOES HERE...</Col>
      </Row>
      <Row>
        <Col>SELECTION GOES HERE</Col>
      </Row>
      <Row>
        <Col>
          <Button>Back</Button>
        </Col>
        <Col>
          <Button>Next</Button>
        </Col>
      </Row>
    </Container>
  );
}
