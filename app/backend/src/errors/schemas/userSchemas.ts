import * as Joi from 'joi';

const userSchema: Record<string, Joi.ObjectSchema> = {
  loginFields: Joi.object({
    email: Joi.string().required().messages({
      'any.required': 'All fields must be filled',
    }),
    password: Joi.string().required().messages({
      'any.required': 'All fields must be filled',
    }),
  }).required(),
  login: Joi.object({
    email: Joi.string()
      .email()
      .min(1)
      .messages({
        'string.email': 'Email must be a valid email',
      })
      .required(),
    password: Joi.string()
      .min(6)
      .messages({
        'string.min': 'Password must have at least 6 characters',
      }),
  }).required(),
};

export default userSchema;
