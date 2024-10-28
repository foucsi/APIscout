const mongoose = require('mongoose');

const APISchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  version: {
    type: String,
    required: true,
    trim: true
  },
  baseUrl: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  endpoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Endpoint',
  }],
  isPublic: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'deprecated', 'development'],
    default: 'development'
  }
}, {
  timestamps: true // This will add createdAt and updatedAt fields automatically
});

// Add indexes for better query performance
APISchema.index({ name: 1, owner: 1 }, { unique: true });
APISchema.index({ status: 1 });

const APIModel = mongoose.model('API', APISchema);

module.exports = APIModel;