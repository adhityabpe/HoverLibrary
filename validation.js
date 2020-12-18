//Validation
const Joi = require('@hapi/joi');

//Regist
const registerValidation = data => {
const schema = Joi.object({
    name: Joi.string().min(6).required(),
    member_id: Joi.number().integer().min(6).required(),
    address: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.number().integer().min(6).required(),
    gender:Joi.string().min(2).required()
    });
    return schema.validate(data);
};

//Login
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
        return schema.validate(data);
};

//regispustakawan
const registerPustakawan = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        pustakawan_id: Joi.number().integer().min(6).required(),
        pustakawan_photo:required(),
        address: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phoneNumber: Joi.number().integer().min(6).required(),
        gender:Joi.string().min(2).required()
        });
        return schema.validate(data);
    };

//loginpustakawan
const loginPustakawan = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
        return schema.validate(data);
    };

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.registerPustakawan = registerPustakawan;
module.exports.loginPustakawan = loginPustakawan;
