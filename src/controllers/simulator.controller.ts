import { Request } from 'express';
import { success } from '../messages';
import { Simulator } from '../models';
import { ErrorHandler } from '../utils/http';
import { APIResponse, Message } from '../utils/types';

const message = success(Message.SIMULATOR);

export default class SimulatorController {
  @ErrorHandler
  static async getAll(req: Request): APIResponse {
    const simulator = await Simulator.find({});

    return { message: message.fetched, data: simulator };
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
    const { profile_id } = req.params;
    const data = await Simulator.find({ profile_id });

    return { message: message.retrieved, data };
  }
}
