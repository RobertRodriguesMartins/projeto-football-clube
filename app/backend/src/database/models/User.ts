import { Model } from 'sequelize';
import { userAttributes } from './tableAttributes';
import db from '.';

class User extends Model {}

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
