const express = require("express");
const router = express.Router();
const asyncMiddleware = require('../middlewares/async.middleware')
const authMiddleware = require('../middlewares/auth.middleware');
const {
    createAccount,
    getAccounts,
    getAccount,
    updateAccount,
    deleteAccount,
} = require('../controllers/account.controller')

router 
    .route("/")
    .get(asyncMiddleware(getAccounts),asyncMiddleware(authMiddleware))
    .post(asyncMiddleware(createAccount));

router
    .route("/:id")
    .patch(asyncMiddleware(updateAccount))
    .get(asyncMiddleware(getAccount))
    .delete(asyncMiddleware(deleteAccount));

module.exports = router;