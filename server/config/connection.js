const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/myeasyshoppinglist'
);

module.exports = mongoose.connection;
