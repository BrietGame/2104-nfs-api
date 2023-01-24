const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');
const mangaRoute = require('./routes/mangas');

app.use(cors());
app.use(BodyParser.json({ limit: '50mb' }));
app.use(BodyParser.urlencoded({ extended: true }));
app.use('/mangas/', mangaRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000');
})
