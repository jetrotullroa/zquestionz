import { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { randomInt } from '../../utils/common';

export function Radio({ id, type, options }: FormProps) {
	const currentOptions = options || [];
	const [checkedIndex, setCheckedIndex] = useState(randomInt(0, currentOptions.length - 1));
  const formType = type === 'radio' ? 'radio' : 'checkbox';
  return (
    <Row>
      {currentOptions.map((option, index) => (
        <Col xs={6} md={3} className="fs-4">
          <Form.Check className='pointer' onClick={() => setCheckedIndex(index)} checked={index === checkedIndex} name={`question-${index}-${id}`} id={`question-${index}-${id}`} type="radio" label={option} />
        </Col>
      ))}
    </Row>
  );
}
