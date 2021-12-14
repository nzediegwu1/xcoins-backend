import Mongoose from 'mongoose';
import { Request } from 'express';
import { success } from '../messages';
import { Simulator } from '../models';
import { ErrorHandler } from '../utils/http';
import { findPaginated } from '../utils/paginate';
import { APIResponse, Message } from '../utils/types';

const message = success(Message.SIMULATOR);
const { ObjectId } = Mongoose.Types;

export default class SimulatorController {
  @ErrorHandler
  static async getAll(req: Request): APIResponse {
    const { page = 1, limit = 20 } = req.query;

    return findPaginated({
      page: +page,
      limit: +limit,
      model: Simulator,
      message: message.fetched,
    });
  }

  @ErrorHandler
  static async create(req: Request): APIResponse {
    const { profile_id } = req.params;
    const newData = { ...req.body, profile_id };
    const simulator = await Simulator.create(newData);

    return { message: message.created, data: simulator };
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
      model: Simulator,
      query: { profile_id: ObjectId(profile_id) },
      message: message.retrieved,
    });
  }
}
