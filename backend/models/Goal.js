const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  savedAmount: { type: Number, default: 0 },
  daysLeft: { type: Number, required: true },
  icon: { type: String, default: 'target' }, // e.g. 'phone', 'plane', 'shield'
  status: { type: String, enum: ['On Track', 'Safe Pace', 'Delayed'], default: 'On Track' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goal', goalSchema);
