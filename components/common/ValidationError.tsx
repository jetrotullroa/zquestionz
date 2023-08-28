export function ValidationMessage({ message }: { message: string | undefined }) {
  return message ? <i className="text-danger">*&nbsp;{message}</i> : null;
}
