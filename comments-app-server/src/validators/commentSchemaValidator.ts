import Joi from 'joi';

export const createCommentBodySchema = Joi.object({
  username: Joi.string().required(),
  content: Joi.string().required(),
});

export const updateCommentParamsSchema = Joi.object({
  id: Joi.number().required(),
});

export const updateCommentBodySchema = Joi.object({
  content: Joi.string().optional(),
  score: Joi.number().optional(),
});

export const deleteCommentParamsSchema = Joi.object({
  id: Joi.number().required(),
});
