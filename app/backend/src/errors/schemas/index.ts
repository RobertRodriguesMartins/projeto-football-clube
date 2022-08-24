import * as Joi from 'joi';
import userSchema from './userSchemas';
import teamSchema from './teamSchemas';
import matchSchema from './matchSchemas';

const schemas: Record<string, Joi.ObjectSchema> = {
  ...userSchema,
  ...teamSchema,
  ...matchSchema,
};

export default schemas;
