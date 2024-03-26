import Joi from 'joi';

export const addressSchema = Joi.object({
  city: Joi.string().required(),
  country: Joi.string().uppercase().pattern(/^[A-Z]{2,3}$/).required(),
  line1: Joi.string().required(),
  line2: Joi.string().allow('', null).optional(),
  postalCode: Joi.string().pattern(/^\d{5}(?:[-\s]\d{4})?$/).required(),
  state: Joi.string().allow('', null).optional(),
});
