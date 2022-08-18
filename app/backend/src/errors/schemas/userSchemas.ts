import * as Joi from 'joi';

const userSchema: Record<string, Joi.ObjectSchema> = {
  login: Joi.object({
    email: Joi.string()
      .email()
      .min(1)
      .required()
      .messages({
        'any.required': 'email obrigatório',
      })
      .required(),
    password: Joi.string()
      .min(6)
      .required()
      .messages({
        'any.required': 'email obrigatório',
      })
      .required(),
  }).required(),
};

export default userSchema;
