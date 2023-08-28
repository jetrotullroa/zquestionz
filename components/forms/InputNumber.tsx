import { useEffect, useMemo, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { validateMaxNumber, validatePresent, validateMinNumber } from '../../utils/validation';
import { ValidationMessage } from '../common/ValidationError';
import { randomInt } from '../../utils/common';

export function InputNumber({ id, type, placeholder, required, maximumRequired, minimumRequired }: FormProps) {
  const firstRender = useRef(true);
  const [value, setValue] = useState(randomInt(minimumRequired, maximumRequired));

  const validationMessages = useMemo(() => {
    return [
      validateMinNumber(value, minimumRequired),
      validateMaxNumber(value, maximumRequired)
    ].filter(Boolean);
  }, [value]);

	const isNotValid = required && validationMessages.length !== 0

  useEffect(() => {
		if (firstRender.current && value > 999) {
			setValue(999)
		}
		if (firstRender.current && value < 0) {
			setValue(0)
		}
    firstRender.current = false;
  }, [value]);

  return (
    <>
      <Form.Control
        placeholder={placeholder}
        size="lg"
        type={type}
        min={0}
        max={999}
        id={`question-${id}`}
        aria-describedby={`${id}HelpBlock`}
        autoFocus
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
				value={value}
      />
      {!firstRender.current && isNotValid && (
        <ValidationMessage message={validationMessages[0]} />
      )}
    </>
  );
}
