import * as Joi from 'joi';

const teamSchema: Record<string, Joi.ObjectSchema> = {
  teamById: Joi.object({
    id: Joi.number().min(1).required().messages({
      'number.min': 'Have to be greater than 0',
    }),
  }).required(),
};

export default teamSchema;
