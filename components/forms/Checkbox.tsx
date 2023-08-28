import { ChangeEvent, ReactEventHandler, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { randomInt } from 'utils/common';

export function Checkbox({
  id,
  type,
  options,
  minimumRequired,
  maximumRequired,
  required,
  setPageValid,
  setAnswers
}: FormProps) {
  const currentOptions = options || [];
  const [values, setValues] = useState<string[]>([
    currentOptions[randomInt(0, currentOptions.length - 1)]
  ]);

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

  useEffect(() => {
    setPageValid(true);

    setAnswers(
      (prevState: Record<string, string | number | boolean | string[]>) => ({
        ...prevState,
        [id]: values
      })
    );
  }, [values]);

  return (
    <>
      {required && (
        <i className="text-muted">
          * Select {minimumRequired} to {maximumRequired} items
        </i>
      )}
      <Row>
        {currentOptions.map((option) => (
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
