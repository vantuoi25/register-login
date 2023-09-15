const accountRouter = require('./account.router');
const catagoryRouter = require('./catagory.router');
const productRouter = require('./product.router');
const commentRouter = require('./comment.router');
const authRouter = require('./auth.router');
const errorHandle = require('../middlewares/error.handle');
module.exports = (app) =>{
    app.use('/api/accounts', accountRouter);
    app.use('api/catagories', catagoryRouter);
    app.use('/api/products', productRouter);
    app.use('/api/comments', commentRouter);
    app.use('/api/auth', authRouter);
    app.use(errorHandle);
};