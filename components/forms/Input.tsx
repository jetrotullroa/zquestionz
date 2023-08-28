import { useEffect, useMemo, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import {
  validateMin,
  validateMax,
  validatePresent,
  validateLettersOnly
} from '../../utils/validation';
import { ValidationMessage } from '../common/ValidationError';

export function Input({
  id,
  type,
  placeholder,
  minimumRequired,
  maximumRequired,
  required,
  pageValid,
  setPageValid,
  answers,
  setAnswers
}: FormProps) {
  const firstRender = useRef(true);
  const [value, setValue] = useState('');

  const validationMessages = useMemo(() => {
    return [
      validatePresent(value),
      validateLettersOnly(value),
      validateMin(value, minimumRequired),
      validateMax(value, maximumRequired)
    ].filter(Boolean);
  }, [value]);

  const isNotValid = required && validationMessages.length !== 0;

  useEffect(() => {
    isNotValid ? setPageValid(false) : setPageValid(true);
    if (!firstRender.current) {
      setAnswers(
        (prevState: Record<string, string | number | boolean | string[]>) => ({
          ...prevState,
          [id]: value
        })
      );
    } else {
      setValue((answers[id] as string | undefined) || '');
    }
    firstRender.current = false;
  }, [value]);

  return (
    <>
      <Form.Control
        placeholder={placeholder}
        size="lg"
        type={type}
        id={`question-${id}`}
        aria-describedby={`${id}HelpBlock`}
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {!firstRender.current && isNotValid && (
        <ValidationMessage message={validationMessages[0]} />
      )}
    </>
  );
}
