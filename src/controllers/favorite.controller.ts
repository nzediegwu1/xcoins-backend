import { Request } from 'express';
import { success } from '../messages';
import { Favorite } from '../models';
import { ErrorHandler } from '../utils/http';
import { APIResponse, Message } from '../utils/types';

const message = success(Message.FAVOURITE);

export default class FavoriteController {
  @ErrorHandler
  static async getAll(req: Request): APIResponse {
    const favorite = await Favorite.find({});

    return { message: message.fetched, data: favorite };
  }

  @ErrorHandler
  static async getByProfile(req: Request): APIResponse {
    const { profile_id } = req.params;
    const data = await Favorite.find({ profile_id });

    return { message: message.retrieved, data };
  }
}
