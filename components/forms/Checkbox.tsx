import { ChangeEvent, ReactEventHandler, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Checkbox({
  id,
  type,
  options,
  minimumRequired,
  maximumRequired,
  required
}: FormProps) {
  const [values, setValues] = useState<string[]>(['Persuasion']);

  const onCheckboxChange = (checked: boolean, option: string) => {
    if (checked) {
      if (required && values.length >= maximumRequired) {
        return false;
      }
      setValues([...values, option]);
    } else {
      if (required && values.length <= minimumRequired) {
        return false;
      }
      setValues(values.filter((value) => value !== option));
    }
    return !checked;
  };

  return (
    <>
      {required && (
        <i className="text-muted">
          * Select {minimumRequired} to {maximumRequired} items
        </i>
      )}
      <Row>
        {(options || []).map((option) => (
          <Col xs={6} md={3} className="fs-4">
            <Form.Check
              id={`question-${id}`}
              type="checkbox"
              label={option}
              checked={values.includes(option)}
              onChange={(e) => onCheckboxChange(e.target.checked, option)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
