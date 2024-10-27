const mongoose = require('mongoose');

const TestResultSchema = new mongoose.Schema({
  endpoint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Endpoint',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['success', 'failure'],
    required: true,
  },
  responseTime: {
    type: Number,
    required: true,
  },
  responseBody: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {timestamps: true});

const TestResultModel = mongoose.model('TestResult', TestResultSchema);

module.exports = TestResultModel;
