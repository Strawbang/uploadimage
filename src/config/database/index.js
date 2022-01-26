const mongoose = require('mongoose');
const DB = process.env.MONGODB_URL || `mongodb://localhost:27017/image`;

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connect to Mongoose');
});