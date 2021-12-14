import { ResponseProps } from './types';
import { Response, Request } from 'express';

/**
 * @description Custom response helper function
 * @param {ResponseProps} {
 *   res,
 *   code = 200,
 *   message,
 *   data,
 *   errors,
 * }
 * @returns {Object} HTTP response json in custom format
 */
const response = ({
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
      console.error('Error: ', message, '\ncode: ', statusCode);
      return response({
        res,
        code: statusCode as number,
        errors: [message as string],
      });
    }
  };
}
