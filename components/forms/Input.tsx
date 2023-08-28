import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Input({ id, type, placeholder }: FormProps) {
  return (
    <Form.Control
      placeholder={placeholder}
      size="lg"
      type={type}
      id={`question-${id}`}
      aria-describedby={`${id}HelpBlock`}
      autoFocus
    />
  );
}
