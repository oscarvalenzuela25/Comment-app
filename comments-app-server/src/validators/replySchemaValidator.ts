import Joi from 'joi';

export const createReplyBodySchema = Joi.object({
  commentId: Joi.number().required(),
  username: Joi.string().required(),
  content: Joi.string().required(),
});

export const updateReplyParamsSchema = Joi.object({
  id: Joi.number().required(),
});

export const updateReplyBodySchema = Joi.object({
  content: Joi.string().optional(),
  score: Joi.number().optional(),
});

export const deleteReplyParamsSchema = Joi.object({
  id: Joi.number().required(),
});
