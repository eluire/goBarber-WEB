import { ValidationError } from "yup";

// informa para o typescript que essa função retornará qualquer chave do tipo string, com o valor string.
interface Errors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
