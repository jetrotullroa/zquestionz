import { Col, Form, Row } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Checkbox({ id, type, options }: FormProps) {

	return (
    <Row>
      {(options || []).map((option) => (
        <Col xs={6} md={3} className="fs-4">
          <Form.Check id={`question-${id}`} type="checkbox" label={option} />
        </Col>
      ))}
    </Row>
  );
}
