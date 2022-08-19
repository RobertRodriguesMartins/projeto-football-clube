import { ErrorRequestHandler } from 'express';

interface ExpectedErrors {
  name: string;
  code: number;
}

const expectedErrors: ExpectedErrors[] = [
  { name: 'validationError', code: 400 },
  { name: 'invalidLogin', code: 401 },
  { name: 'notFound', code: 404 },
  { name: 'tokenNotFound', code: 400 },
  { name: 'invalidToken', code: 401 },
];

const errorMiddleware: ErrorRequestHandler = (err: Error, _req, res, _next) => {
  const errorName: string = err.name.toLowerCase();
  const expectedError: ExpectedErrors | undefined = expectedErrors.find(
    (expectedErr) => expectedErr.name.toLowerCase() === errorName,
  );

  if (!expectedError) {
    return res.status(500).json({ message: err.message });
  }

  const { code } = expectedError;
  return res.status(code).json({ message: err.message });
};

export default errorMiddleware;
