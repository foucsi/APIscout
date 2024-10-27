const mongoose = require('mongoose');

const APISchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  endpoints: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Endpoint',
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const APIModel = mongoose.model('API', APISchema);

module.exports = APIModel;