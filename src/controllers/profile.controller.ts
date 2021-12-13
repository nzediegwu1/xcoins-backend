import { Request } from 'express';
import { success } from '../messages';
import { Profile } from '../models';
import { ErrorHandler } from '../utils/http';
import { APIResponse, Message } from '../utils/types';

const message = success(Message.PROFILE);

export default class ProfileController {
  @ErrorHandler
  static async getAll(req: Request): APIResponse {
    const data = await Profile.find({});

    return { message: message.fetched, data };
  }

  @ErrorHandler
  static async create(req: Request): APIResponse {
    const { email, name, nickname } = req.body;

    let profile = await Profile.findOne({
      $or: [{ email }, { nickname }],
    });

    if (!profile) profile = await Profile.create({ name, email, nickname });

    return { message: message.created, data: profile };
  }
}
