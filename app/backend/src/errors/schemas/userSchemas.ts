import * as Joi from 'joi';

const requiredFields = 'All fields must be filled';

const userSchema: Record<string, Joi.ObjectSchema> = {
  loginFields: Joi.object({
    email: Joi.string().empty('').required().messages({
      'any.required': requiredFields,
      'string.empty': requiredFields,
    })
      .required(),
    password: Joi.string().empty('').required().messages({
      'any.required': requiredFields,
      'string.empty': requiredFields,
    })
      .required(),
  }).required(),
  login: Joi.object({
    email: Joi.string()
      .email()
      .messages({
        'string.email': 'Email must be a valid email',
      })
      .required(),
    password: Joi.string().min(6).messages({
      'string.min': 'Password must have at least 6 characters',
    }),
  }).required(),
};

export default userSchema;
