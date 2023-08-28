import { Container, Row, Col, Button } from 'react-bootstrap';
import data from 'json/data.json';

export default function Home() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center vh-100 w-100"
      fluid
    >
      <Row>
        <Col>
          <h1 className="font-grey-600">{data.title}</h1>
        </Col>
      </Row>

      {data.questionnaire.map((q) => {
        return (
          <Row>
            <Col>
              <Row>
                <Col>
                  <h3 className="text-center">{q.question}</h3>
                </Col>
              </Row>
              <Row>
                <Col>{q.type}</Col>
              </Row>
            </Col>
          </Row>
        );
      })}
      <Row className="w-100">
        <Col className="d-flex align-items-center justify-content-between w-100">
          <Row>
            <Col>
              <Button>Back</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>Next</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
