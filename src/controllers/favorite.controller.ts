import Mongoose from 'mongoose';
import { Request } from 'express';
import { success } from '../messages';
import { Favorite } from '../models';
import { ErrorHandler } from '../utils/http';
import { findPaginated } from '../utils/paginate';
import { APIResponse, Message } from '../utils/types';

const { ObjectId } = Mongoose.Types;
const message = success(Message.FAVOURITE);

export default class FavoriteController {
  @ErrorHandler
  static async getAll(req: Request): APIResponse {
    const { page = 1, limit = 20 } = req.query;

    return findPaginated({
      page: +page,
      limit: +limit,
      model: Favorite,
      message: message.fetched,
    });
  }

  @ErrorHandler
  static async getByProfile(req: Request): APIResponse {
    const {
      params: { profile_id },
      query: { page = 1, limit = 20 },
    } = req;

    return findPaginated({
      page: +page,
      limit: +limit,
      model: Favorite,
      query: { profile_id: ObjectId(profile_id) },
      message: message.retrieved,
    });
  }
}
