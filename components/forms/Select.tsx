import { Form } from 'react-bootstrap';
import { FormProps } from 'types/Form';

export function Select({
  id,
  type,
  options
}: FormProps) {
  return (
    <Form.Select size="lg" id={`question-${id}`}>
      {(options || []).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
  );
}
