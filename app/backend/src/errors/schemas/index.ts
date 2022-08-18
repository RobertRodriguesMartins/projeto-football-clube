import * as Joi from 'joi';
import userSchema from './userSchemas';

const schemas: Record<string, Joi.ObjectSchema> = {
  ...userSchema,
};

export default schemas;
