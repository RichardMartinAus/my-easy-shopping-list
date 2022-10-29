const { Schema } = require('mongoose');

const listSchema = new Schema({
  listName: {
    type: String,
  },
  items: [
    {
      type: String,
    },
  ],
});

module.exports = listSchema;
