import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { randomInt } from '../../utils/common';

export function Range({ id, type, minimumRequired, maximumRequired }: FormProps) {
  const [value, setValue] = useState(randomInt(minimumRequired, maximumRequired));
  return (
    <>
      <div className="text-center fs-3 fw-bold">{value}</div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="w-25 fs-4 fw-bold text-end">{minimumRequired}</div>
        <div className="w-50 mx-4 text-center">
          <Form.Control
            className="form-range bg-dark"
            size="lg"
            type="range"
            min={minimumRequired}
            max={maximumRequired}
            id={`question-${id}`}
            aria-describedby={`${id}HelpBlock`}
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
            value={value}
          />
        </div>
        <div className="w-25 fs-4 fw-bold text-left">{maximumRequired}</div>
      </div>
    </>
  );
}
