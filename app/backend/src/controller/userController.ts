import { Response, Request, NextFunction } from 'express';
import UserService from '../service/userService';

class UserController {
  static async findAll(
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const response = await UserService.findAll();

    return res.status(200).json(response);
  }

  static async login(
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    return res.status(200);
  }
}

export default UserController;
