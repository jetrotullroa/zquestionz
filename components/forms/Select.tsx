import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { randomInt } from '../../utils/common';

export function Select({
  id,
  type,
  options,
  setPageValid,
  setAnswers
}: FormProps) {
  const currentOptions = options || [];
  const [value, setValue] = useState(
    currentOptions[randomInt(0, currentOptions.length - 1)]
  );

  useEffect(() => {
    setPageValid(true);
    setAnswers(
      (prevState: Record<string, string | number | boolean | string[]>) => ({
        ...prevState,
        [id]: value
      })
    );
  }, []);

  return (
    <>
      <Form.Select
        size="lg"
        id={`question-${id}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {currentOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </>
  );
}
