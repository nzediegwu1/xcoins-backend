import { Response } from 'express';

export enum Message {
  SIMULATOR = 'simulator',
  FAVOURITE = 'favourite',
  PROFILE = 'profile',
}

export interface ResponseProps {
  res: Response;
  code: number;
  message?: string;
  data?: any;
  errors?: string[];
}

export type APIResponse = Promise<{
  message: string;
  data?: any;
}>;
