import * as Joi from 'joi';

const matchSchema: Record<string, Joi.ObjectSchema> = {
  matchFindByQuery: Joi.object({
    inProgress: Joi.boolean(),
  }),
  matchSave: Joi.object({
    homeTeam: Joi.number().min(1).required(),
    awayTeam: Joi.number().min(1).required(),
    homeTeamGoals: Joi.number().min(1).required(),
    awayTeamGoals: Joi.number().min(1).required(),
    inProgress: Joi.bool(),
  }).required(),
  matchFinish: Joi.object({
    id: Joi.number().min(1).required(),
  }).required(),
};

export default matchSchema;
