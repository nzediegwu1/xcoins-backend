import { Response } from 'express';
import { Model } from 'mongoose';

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

export type Paginated = Promise<{
  message: string;
  data: { total: number; data: any[] };
}>;

export interface PaginatedArgs {
  page: number;
  limit: number;
  model: Model<any>;
  query?: any;
  message: string;
}
