import { ResponseProps } from './types';
import { Response, Request } from 'express';

export const response = ({
  res,
  code = 200,
  message,
  data,
  errors,
}: ResponseProps) => res.status(code).json({ message, data, errors });

export class CustomError extends Error {
  statusCode: number;
  constructor(message: string, code: number) {
    super(message);
    this.statusCode = code;
  }
}

/**
 * @description Checks if a value exists, or throw 404 error
 *
 * @param {any} data Item to check if is truthy
 * @param {String} message Error message to return upon failure
 *
 * @throws {CustomError}
 */
export const existsOr404 = (data: any, message: string) => {
  if (!data) {
    throw new CustomError(message, 404);
  }
};

/**
 * @description HTTP error resolver for controller actions
 *
 * @param {Object} target Details about the decorated member
 * @param {String} key Method name to be decorated
 * @param {Object} descriptor PropertyDescriptor
 *
 * @returns {Promise} Promise to resolve action or http error response
 */
export function ErrorHandler(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  const action = descriptor.value;
  descriptor.value = async function (req: Request, res: Response) {
    try {
      const result = await action.call(this, req, res);
      return response({ res, ...result });
    } catch ({ message, statusCode = 500 }) {
      return response({
        res,
        code: statusCode as number,
        errors: [message as string],
      });
    }
  };
}
