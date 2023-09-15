const accountModel = require('../models/account.model')
const accountValid = require('../validation/account.valid');

module.exports = {
    createAccount: async (req, res) =>{
        const body = req.body;
        const {error, value} = accountValid(body);
        if(error){
            return res.status(400).json({
                statusCode,
                message, 
            });
        }
            const newAccount = await accountModel.create(body);
        return res.status(201).json(newAccount);
    },
        
        /*const newAccount = await accountModel.create(body);
        return res.status(201).json(newAccount);*/

    getAccounts: async (req, res) =>{
        const accounts = await accountModel.find();
        return res.status(200).json(accounts);
    },
    getAccount: async (req, res) =>{
        const id = req.params.id;
        const getAccount = await accountModel.find({
            _id: id
        });
        return res.status(200).json(getAccount);
    },
    updateAccount: async (req, res) =>{
        const id = req.params.id;
        const body = req.body;
        //const updateAccount = await accountModel.findByIdAndUpdate(id, body, {new: true})
        const updateAccount = await accountModel.findOneAndUpdate({
            _id: id
        }, body, {new: true});
        return res.status(200).json(updateAccount);
    },
    deleteAccount: async (req, res) =>{
        const id = req.params.id;
        const updateAccount = await accountModel.findByIdAndDelete(id);
        return res.status(200).json(updateAccount);
    }

};
