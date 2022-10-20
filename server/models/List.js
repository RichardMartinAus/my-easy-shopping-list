const { Schema } = require('mongoose');

const listSchema = new Schema({
  items: [
    {
      type: String,
    },
  ],
});

module.exports = listSchema;
