import { Model } from 'sequelize';
import { userAttributes } from './tableAttributes';
import db from './db';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  email!: string;
  role!: string;
}

User.init(
  {
    ...userAttributes,
  },
  {
    sequelize: db,
    modelName: 'user',
    tableName: 'users',
    timestamps: false,
  },
);

export default User;
