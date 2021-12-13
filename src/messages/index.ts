import { Message } from '../utils/types';

export const success = (type: Message) => ({
  retrieved: `Successfully retrieved ${type}`,
  created: `Successfully created ${type}`,
  fetched: `Successfully fetched ${type}s`,
});

export const failure = (type: Message) => ({
  404: `${type} does not exist`,
  invalidId: 'profile_id parameter is invalid',
});
