import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Textarea({ id, type, placeholder }: FormProps) {
  return (
    <Form.Control
			placeholder={placeholder}
      type={type}
			as="textarea"
      id={`question-${id}`}
      aria-describedby={`${id}HelpBlock`}
			rows={10}
    />
  );
}
