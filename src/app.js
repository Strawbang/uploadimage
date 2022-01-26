const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: [
        'http://localhost:3000',
    ]
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());


require('./config/database');
require('./components/image/imageRoute')(app);

app.post('/', (req, res) => {
    res.send('Api image optimize')
});

module.exports = app;