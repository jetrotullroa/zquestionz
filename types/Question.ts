export type Question = {
  id: string;
  question: string;
	placeholder: string;
  type: string;
  options: string[];
  multiple: boolean;
  required: boolean;
  minimumRequired: number;
  maximumRequired: number;
};
