import Joi from 'joi';

const MIN_NAME = 2;
const MIN_PASSWORD = 6;

export default Joi.object({
  username: Joi.string().min(MIN_NAME),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'br'] },
  }).required(),
  password: Joi.string().min(MIN_PASSWORD).required(),
});
