import { check } from 'express-validator/check';

export const validateProfile = [
  check('name')
    .optional()
    .trim()
    .isString()
    .withMessage('Name should be a string')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name should be between than 2 to 80 characters!'),
  check('email').optional().isEmail().withMessage('Email provided is invalid'),
  check('nickname')
    .optional()
    .trim()
    .isString()
    .withMessage('Nickname should be a string')
    .isLength({ min: 2, max: 100 })
    .withMessage('Nickname should be between than 2 to 80 characters!'),
  check('capital')
    .optional()
    .trim()
    .isNumeric()
    .withMessage('Invalid capital value provided'),
  check('prefered_cryptocurrency')
    .optional()
    .trim()
    .isString().withMessage('prefered_cryptocurrency should be a string')
    .isLength({ min: 2 })
    .withMessage('Please provide a valid prefered_cryptocurrency'),
  check('divisa')
    .optional()
    .trim()
    .isString()
    .withMessage('Invalid divisa value provided'),
];
