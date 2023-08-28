export interface FormProps {
  id: string;
  type: string;
  placeholder?: string;
  options?: string[];
  required: boolean;
  minimumRequired: number;
  maximumRequired: number;
  pageValid: boolean;
  setPageValid: CallableFunction;
  answers: Record<string, string | number | boolean | string[]>;
  setAnswers: CallableFunction;
}
