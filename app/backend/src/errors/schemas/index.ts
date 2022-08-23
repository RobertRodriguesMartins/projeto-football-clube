import * as Joi from 'joi';
import userSchema from './userSchemas';
import teamSchema from './teamSchemas';

const schemas: Record<string, Joi.ObjectSchema> = {
  ...userSchema,
  ...teamSchema,
};

export default schemas;
