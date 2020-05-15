const Joi = require('@hapi/joi');

const { generateError } = require('../../helpers');

// Basic Schemas
const searchSchema = Joi.string()
  .min(2)
  .required()
  .error(
    generateError(
      'El campo de búsqueda debe de ser de máis de 2 caracteres',
      400
    )
  );

const emailSchema = Joi.string()
  .email()
  .required()
  .error(generateError('El campo email debe ser un email bien formado', 400));

const passwordSchema = Joi.string()
  .min(6)
  .max(100)
  .required()
  .error(
    generateError('La password debe de tener entre 6 y 100 carateres', 400)
  );

// Object Schemas
const entrySchema = Joi.object().keys({
  place: Joi.string()
    .max(100)
    .required()
    .error(
      generateError(
        'El campo place es obligatorio y no puede tener más de 100 caracteres',
        400
      )
    ),
  description: Joi.string()
    .max(1000)
    .required()
    .error(
      generateError(
        'El campo description es obligatorio y non puede tener más de 1000 caracteres',
        400
      )
    )
});

const voteSchema = Joi.object().keys({
  vote: Joi.number()
    .min(1)
    .max(5)
    .integer()
    .required()
    .error(
      generateError(
        'El campo voto debe existir y ser un número entre 1 y 5',
        400
      )
    )
});

const userSchema = Joi.object().keys({
  email: emailSchema,
  password: passwordSchema
});

const editUserSchema = Joi.object().keys({
  email: emailSchema,
  realName: Joi.string()
    .max(255)
    .error(
      generateError('El nombre real no puede pasar de 255 caracteres', 400)
    )
});

const editPasswordUserSchema = Joi.object().keys({
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
  newPasswordRepeat: Joi.any()
    .valid(Joi.ref('newPassword'))
    .error(generateError('Las passwords debe ser iguales', 400))
});

module.exports = {
  entrySchema,
  voteSchema,
  searchSchema,
  userSchema,
  editUserSchema,
  editPasswordUserSchema
};
