import User from '../database/models/User';

class UserService {
  static async findAll(): Promise<User[]> {
    const rawResponse = await User.findAll({
      raw: true,
    });

    return rawResponse;
  }
}

export default UserService;
