const Joi = require('joi');

const userValidationSchema = {
  create: Joi.object({
    username: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username cannot exceed 30 characters',
        'any.required': 'Username is required'
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
      }),
    password: Joi.string()
      .min(8)
      .required()
      .messages({
        'string.min': 'Password must be at least 8 characters long',
        'any.required': 'Password is required'
      }),
    firstName: Joi.string()
      .max(50)
      .optional(),
    lastName: Joi.string()
      .max(50)
      .optional(),
    role: Joi.string()
      .valid('user', 'admin', 'moderator')
      .default('user'),
    profilePicture: Joi.string()
      .uri()
      .optional()
      .allow(null)
  }),

  update: Joi.object({
    username: Joi.string()
      .min(3)
      .max(30)
      .optional(),
    firstName: Joi.string()
      .max(50)
      .optional(),
    lastName: Joi.string()
      .max(50)
      .optional(),
    profilePicture: Joi.string()
      .uri()
      .optional()
      .allow(null)
  })
};

module.exports = userValidationSchema;
