import { useEffect, useMemo, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { validateMax, validateMin, validatePresent } from 'utils/validation';

export function Textarea({
  id,
  type,
  placeholder,
  required,
  minimumRequired,
  maximumRequired,
  pageValid,
  setPageValid,
  answers,
  setAnswers
}: FormProps) {
  const [value, setValue] = useState('');
  const validationMessages = useMemo(() => {
    return [
      validatePresent(value),
      validateMin(value, minimumRequired),
      validateMax(value, maximumRequired)
    ].filter(Boolean);
  }, [value]);

  const isNotValid = required && validationMessages.length !== 0;

  useEffect(() => {
    isNotValid ? setPageValid(false) : setPageValid(true);
    setAnswers(
      (prevState: Record<string, string | number | boolean | string[]>) => ({
        ...prevState,
        [id]: value
      })
    );
  }, [value]);

  return (
    <Form.Control
      placeholder={placeholder}
      type={type}
      as="textarea"
      id={`question-${id}`}
      aria-describedby={`${id}HelpBlock`}
      rows={10}
      autoFocus
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
