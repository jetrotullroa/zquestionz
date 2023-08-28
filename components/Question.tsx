import { Col, Row } from 'react-bootstrap';
import { Question } from 'types/Question';
import { Input } from './forms/Input';
import { Textarea } from './forms/Textarea';
import { Select } from './forms/Select';
import { Radio } from './forms/Radio';
import { Switch } from './forms/ Switch';
import { Range } from './forms/Range';
import { Checkbox } from './forms/Checkbox';

interface QuestionProps {
  activeQuestion: Question;
}

export function Question({ activeQuestion }: QuestionProps) {
  const { id, question, type, options, placeholder } = activeQuestion;

  let renderForm: JSX.Element | null = null;
  if (type === 'textarea') {
    renderForm = <Textarea id={id} type={type} placeholder={placeholder} />;
  } else if (type === 'select') {
    renderForm = (
      <Select id={id} type={type} options={options} placeholder={placeholder} />
    );
  } else if (type === 'select') {
    renderForm = <Select id={id} type={type} options={options} />;
  } else if (type === 'switch') {
    renderForm = <Switch id={id} type={type} placeholder={placeholder} />;
  } else if (type === 'range') {
    renderForm = <Range id={id} type={type} placeholder={placeholder} />;
  } else if (type === 'checkbox') {
    renderForm = <Checkbox id={id} type={type} options={options} />;
  } else if (type === 'radio') {
    renderForm = <Radio id={id} type={type} options={options} />;
  } else {
    renderForm = <Input id={id} type={type} placeholder={placeholder} />;
  }

  return (
    <>
      <Row className="mb-5">
        <Col>
          <h3 className="text-center">{question}</h3>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>{renderForm}</Col>
      </Row>
    </>
  );
}
