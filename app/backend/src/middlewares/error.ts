import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err: Error, _req, res, _next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err });
  }

  return res.status(500).json({ message: err });
};

export default errorMiddleware;
