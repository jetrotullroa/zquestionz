export interface FormProps {
  id: string;
  type: string;
	placeholder?: string;
	options?: string[];
	required: boolean;
	minimumRequired: number;
	maximumRequired: number;
}
