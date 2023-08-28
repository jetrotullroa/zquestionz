export function validatePresent(value: string): string | undefined {
  return value ? undefined : 'this field is required';
}

export function validateEmail(value: string): string | undefined {
	return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
		? undefined
		: 'must be a valid email';
}

export function validateLettersOnly(value: string): string | undefined {
	return value.match(/^[a-zA-Z]+$/) ? undefined : 'must be letters only';
}

export function validateMax(value: string, max: number): string | undefined {
  return value.length > max ? `must be ${max} characters or less` : undefined;
}

export function validateMin(value: string, min: number): string | undefined {
  return value.length < min ? `must be ${min} characters or more` : undefined;
}

export function validateMaxNumber(value: number, max: number): string | undefined {
	return value > max ? `must be ${max} or less` : undefined;
}

export function validateMinNumber(value: number, min: number): string | undefined {
	return value < min ? `must be ${min} or more` : undefined;
}
