const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');
// ROUTES
const authRoute = require('./routes/auth');
// const uploadRoute = require('./routes/upload');
const userRoute = require('./routes/users');
const roomRoute = require('./routes/rooms');

app.use(cors());
app.use(BodyParser.json({ limit: '50mb' }));
app.use(BodyParser.urlencoded({ extended: true }));
app.use('/auth/', authRoute);
// app.use('/upload/', uploadRoute);
app.use('/users/', userRoute);
app.use('/rooms/', roomRoute);

app.listen(3001, () => {
    console.log('Server started on port 3001');
})
