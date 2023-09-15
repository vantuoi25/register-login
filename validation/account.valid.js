const Joi = require('joi');

const schemaValidAccount = Joi.object({
    username: Joi.string()
    .min(6)
    .message('username phải trên 6 ký tự')
    .max(16)
    .message('username phải dưới 16 ký tự')
    .required(),
  password: Joi.string()
    .required(),
});

module.exports = (account) => schemaValidAccount.validate(account);