
// src/infrastructure/database/models/EndpointModel.js
const mongoose = require('mongoose');

const EndpointSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    required: true,
  },
  api: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'API',
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  parameters: [
    {
      name: String,
      type: String,
      required: Boolean,
    }
  ],
  responses: [
    {
      statusCode: Number,
      body: String,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {timestamps: true});

const EndpointModel = mongoose.model('Endpoint', EndpointSchema);

module.exports = EndpointModel;
