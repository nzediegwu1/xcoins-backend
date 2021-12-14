import { Request } from 'express';
import { success } from '../messages';
import { Profile } from '../models';
import { ErrorHandler } from '../utils/http';
import { findPaginated } from '../utils/paginate';
import { APIResponse, Message } from '../utils/types';

const message = success(Message.PROFILE);

export default class ProfileController {
  @ErrorHandler
  static async getAll(req: Request): APIResponse {
    const { page = 1, limit = 20 } = req.query;

    return findPaginated({
      page: +page,
      limit: +limit,
      model: Profile,
      message: message.fetched,
    });
  }

  @ErrorHandler
  static async create(req: Request): APIResponse {
    const { email, nickname } = req.body;
    const data = {
      ...req.body,
      email: email?.trim().toLowerCase(),
      nickname: nickname?.trim().toLowerCase(),
    };

    let profile = await Profile.findOne({
      $or: [{ email: data.email }, { nickname: data.nickname }],
    });

    if (!profile) profile = await Profile.create(data);

    return { message: message.created, data: profile };
  }
}
