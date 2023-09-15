const express = require("express");
const router = express.Router();

const {
    createComment,
    getComments,
    getComment,
    updateComment,
    deleteComment
} = require('../controllers/comment.controller')

router 
    .route("/")
    .get(getComments)
    .post(createComment);

router
    .route("/:id")
    .patch(updateComment)
    .get(getComment)
    .delete(deleteComment)
module.exports = router;