import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';
import { randomInt } from '../../utils/common';

export function Select({
  id,
  type,
  options
}: FormProps) {
	const currentOptions = options || [];
	const [value, setValue] = useState(currentOptions[randomInt(0, currentOptions.length - 1)]);
	
  return (
		<>
    <Form.Select size="lg" id={`question-${id}`} value={value} onChange={e => setValue(e.target.value)}>
      {(currentOptions).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
		</>
  );
}
