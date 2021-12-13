import { check } from 'express-validator/check';
import { failure } from '../messages';
import { Message } from '../utils/types';

const message = failure(Message.FAVOURITE);

export default [
  check('profile_id').trim().isMongoId().withMessage(message.invalidId),
];
