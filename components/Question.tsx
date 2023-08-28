import { Col, Row } from 'react-bootstrap';
import { Question } from 'types/Question';
import { Input } from './forms/Input';
import { Textarea } from './forms/Textarea';
import { Select } from './forms/Select';
import { Radio } from './forms/Radio';
import { Switch } from './forms/ Switch';
import { Range } from './forms/Range';
import { Checkbox } from './forms/Checkbox';
import { InputNumber } from './forms/InputNumber';
import { InputEmail } from './forms/InputEmail';

interface QuestionProps {
  activeQuestion: Question;
}

export function Question({ activeQuestion }: QuestionProps) {
  const {
    required,
    id,
    question,
    type,
    options,
    placeholder,
    minimumRequired,
    maximumRequired
  } = activeQuestion;

  let renderForm: JSX.Element | null = null;
  const formProps = {
    id,
    type,
    placeholder,
    maximumRequired,
    minimumRequired,
    required,
    options
  };
  if (type === 'number') {
    renderForm = <InputNumber {...formProps} />;
  } else if (type === 'email') {
    renderForm = <InputEmail {...formProps} />;
  } else if (type === 'textarea') {
    renderForm = <Textarea {...formProps} />;
  } else if (type === 'select') {
    renderForm = <Select {...formProps} />;
  } else if (type === 'switch') {
    renderForm = <Switch {...formProps} />;
  } else if (type === 'range') {
    renderForm = <Range {...formProps} />;
  } else if (type === 'checkbox') {
    renderForm = <Checkbox {...formProps} />;
  } else if (type === 'radio') {
    renderForm = <Radio {...formProps} />;
  } else {
    renderForm = <Input {...formProps} />;
  }

  return (
    <>
      <Row className="mb-5">
        <Col>
          <h3 className="text-center">
            {question}&nbsp;
            <span className="text-muted fs-4">
              ({required ? 'Required' : 'Optional'})
            </span>
          </h3>
        </Col>
      </Row>
      <Row className="w-100">
        <Col>{renderForm}</Col>
      </Row>
    </>
  );
}
