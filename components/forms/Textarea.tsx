import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Textarea({ id, type, placeholder, required, minimumRequired, maximumRequired }: FormProps) {
	const [value, setValue] = useState('');
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
