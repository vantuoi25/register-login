const commentModel = require('../models/comment.model')

module.exports = {
    createComment: async (req, res) =>{
        const body = req.body;
        const newComment = await commentModel.create(body);
        return res.status(201).json(newComment);
    },
    getComments: async (req, res) =>{
        const Comments = await commentModel.find();
        return res.status(200).json(Comments);
    },
    getComment: async (req, res) =>{
        const id = req.params.id;
        const getComment = await commentModel.find({
            _id: id
        });
        return res.status(200).json(getComment);
    },
    updateComment: async (req,res) =>{
        const id = req.params.id;
        const body = req.body;
        const updateComment = await commentModel.findOneAndUpdate({
            _id: id
        });
        return res.status(200). json(updateComment);
    },
    deleteComment: async (req, res) =>{
        const id = req.params.id;
        const deleteComment = await commentModel.findByIdAndDelete(id);
        return res.status(200).json(deleteComment);
    }
};
