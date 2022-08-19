import { compare } from 'bcryptjs';
import User from '../database/models/User';
import { ILogin, IUser } from '../database/models/interfaces';
import { InvalidLogin } from '../errors';

class UserService {
  static async findAll(): Promise<User[]> {
    const rawResponse = await User.findAll({
      raw: true,
    });

    return rawResponse;
  }

  static async login(user: ILogin): Promise<IUser> {
    const rawResponse = (await User.findOne({
      raw: true,
      where: {
        email: user.email,
      },
    })) as IUser | null;

    if (!rawResponse) throw new InvalidLogin();

    const valid = await compare(user.password, rawResponse.password);

    if (!valid) throw new InvalidLogin();

    return rawResponse;
  }
}

export default UserService;
