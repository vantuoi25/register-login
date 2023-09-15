const express = require('express');
const app = express();
const connectDB = require('./configs/database');
const router = require('./routers');
/*
// Sử dụng asyncMiddleware trong tuyến đường
app.get('/some-route', asyncMiddleware, (req, res) => {
    // Xử lý yêu cầu ở đây
    res.json({ message: 'Request completed successfully' });
  });
*/  

app.use(express.json());
router(app);
connectDB();
app.listen(5000, ()=>{
    console.log('Server run at post ' + 5000);
})