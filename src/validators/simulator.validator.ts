import { check } from 'express-validator/check';
import { failure } from '../messages';
import { Message } from '../utils/types';

const message = failure(Message.FAVOURITE);

export const validateSimulator = [
  check('profile_id').trim().isMongoId().withMessage(message.invalidId),
  check('dateRecorded')
    .optional()
    .custom((date) => {
      return Boolean(Date.parse(date));
    })
    .withMessage('dateRecorded provided is invalid'),
  check('cryptocurrency')
    .optional()
    .trim()
    .isString()
    .withMessage('cryptocurrency should be a string')
    .isLength({ min: 2 })
    .withMessage('Please provide a valid cryptocurrency'),
  check('euros')
    .optional()
    .trim()
    .isNumeric()
    .withMessage('Invalid euros value provided'),
  check('price')
    .optional()
    .trim()
    .isNumeric()
    .withMessage('Invalid price value provided'),
  check('quantity')
    .optional()
    .trim()
    .isNumeric()
    .withMessage('Invalid euros value provided'),
];
