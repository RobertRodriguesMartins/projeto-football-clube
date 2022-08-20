import { Response, Request, NextFunction } from 'express';
import UserService from '../service/userService';
import { Token } from '../middlewares';
import runSchema from '../errors/utils/runSchema';
import { IUser } from '../database/models/interfaces';

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
    const fields = await runSchema('loginFields', { ...req.body });
    const userRepresentation = await runSchema('login', fields);

    const user = await UserService.login(userRepresentation);
    const { password, ...userWithoutPassword } = user;
    const token = await Token.generateToken(userWithoutPassword);

    return res.status(200).json({ token });
  }

  static async validate(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response<string>> {
    const user: IUser = req.body.user as IUser;
    return res.status(200).json({ role: user.role });
  }
}

export default UserController;
