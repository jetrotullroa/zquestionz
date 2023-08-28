import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Range({ id, type }: FormProps) {
  const [value, setValue] = useState(Math.floor(Math.random() * 999));
  return (
    <>
      <div className="text-center fs-3 fw-bold">{value}</div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="w-25 fs-4 fw-bold text-end">0</div>
        <div className="w-50 mx-4 text-center">
          <Form.Control
            className="form-range bg-dark"
            size="lg"
            type="range"
            min={0}
            max={999}
            id={`question-${id}`}
            aria-describedby={`${id}HelpBlock`}
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
            value={value}
          />
        </div>
        <div className="w-25 fs-4 fw-bold text-left">999</div>
      </div>
    </>
  );
}
