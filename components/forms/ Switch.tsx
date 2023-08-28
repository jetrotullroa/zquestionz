import { useEffect, useState } from 'react';
import { Col, Form, Row, Container } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Switch({ id, setPageValid, setAnswers }: FormProps) {
  const [value, setValue] = useState(false);
  useEffect(() => {
    setPageValid(true);
    setAnswers(
      (prevState: Record<string, string | number | boolean | string[]>) => ({
        ...prevState,
        [id]: value
      })
    );
  }, [value]);

  return (
    <Container className="fs-1 d-flex flex-row w-100 align-items-center justify-content-center">
      <div>No</div>
      <Form.Check
        id={`question-${id}`}
        type="switch"
        className="mx-4"
        onChange={(e) => setValue((prev) => !prev)}
      />
      <div>Yes</div>
    </Container>
  );
}
