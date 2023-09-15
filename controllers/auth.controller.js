const dotenv = require('dotenv');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const accountModel = require('../models/account.model');
const accountValid = require('../validation/account.valid');
const ErrorResponse = require('../helpers/ErrorResponse');
dotenv.config();

module.exports = {
    register: async (req, res) =>{
            const { username, password } = req.body;
            const { error, value} = accountValid(body);

            if(error){
                throw new ErrorResponse(400, 'TK or MK fail!!');
            }
            const newAccount = await accountModel.create(body);
            return res.status(201).json(newAccount);
            },
        
    login: async (req, res) =>{
       const {username, password} = req.body;
       const account = await accountModel.findOne({
            username: username,
       });
       if(!account){
        throw new ErrorResponse(401, 'TK or MK fail!');
       }

       const checkPass = bcryptjs.compareSync(password, account.password);
       if(!checkPass){
        throw new ErrorResponse(401, 'TK or MK fail!');
       }

       const payload = {
        _id: account._id,
        username: account.username,
       };

       const token = jwt.sign(payload, process.env.SECRET_KEY);

       return res.status(200).json({
        _id: account._id,
        username:account.username,
        jwt: token,
       });
    }
};