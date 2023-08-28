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
  pageValid: boolean;
  setPageValid: CallableFunction;
  answers: Record<string, string | number | boolean | string[]>;
  setAnswers: CallableFunction;
}

export function Question({
  activeQuestion,
  pageValid,
  setPageValid,
  answers,
  setAnswers
}: QuestionProps) {
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
    options,
    pageValid,
    setPageValid,
    answers,
    setAnswers
  };

  switch (type) {
    case 'radio':
      renderForm = <Radio {...formProps} />;
      break;
    case 'select':
      renderForm = <Select {...formProps} />;
      break;
    case 'textarea':
      renderForm = <Textarea {...formProps} />;
      break;
    case 'switch':
      renderForm = <Switch {...formProps} />;
      break;
    case 'range':
      renderForm = <Range {...formProps} />;
      break;
    case 'checkbox':
      renderForm = <Checkbox {...formProps} />;
      break;
    case 'number':
      renderForm = <InputNumber {...formProps} />;
      break;
    case 'email':
      renderForm = <InputEmail {...formProps} />;
      break;
    default:
      renderForm = <Input {...formProps} />;
      break;
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
