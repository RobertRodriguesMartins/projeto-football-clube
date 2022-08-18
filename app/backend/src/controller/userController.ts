import { Response, Request, NextFunction } from 'express';
import { Token } from '../middlewares';
import runSchema from '../errors/utils/runSchema';
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
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const userRepresentation = await runSchema('login', { ...req.body });

    const user = await UserService.login(userRepresentation);
    const { password, ...userWithoutPassword } = user;
    const token = await Token.generateToken(userWithoutPassword);

    return res.status(200).json({ token });
  }
}

export default UserController;
