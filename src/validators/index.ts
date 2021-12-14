import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator/check';

const getErrors = (req: Request, next: NextFunction) => {
  const errors = validationResult(req)
    .array()
    .map((error) => error.msg);
  if (!errors.length) {
    return next();
  }
  return errors;
};

export const handleValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = getErrors(req, next);
  return Array.isArray(result)
    ? res.status(400).json({ errors: result })
    : result;
};

export { validateProfile } from './profile.validator';
export { validateSimulator } from './simulator.validator';
export { default as validateId } from './id.validator';
