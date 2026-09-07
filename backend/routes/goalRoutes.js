const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// Seed mock data if empty and get goals
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    let goals = await Goal.find({ userId });
    
    // Seed initial goals if none exist to match mockup
    if (goals.length === 0) {
      const mockGoals = [
        { userId, title: 'New Phone', targetAmount: 10000, savedAmount: 6500, daysLeft: 45, icon: 'phone', status: 'On Track' },
        { userId, title: 'Travel Fund', targetAmount: 8000, savedAmount: 3200, daysLeft: 72, icon: 'plane', status: 'On Track' },
        { userId, title: 'Emergency Fund', targetAmount: 5000, savedAmount: 4000, daysLeft: 12, icon: 'shield', status: 'Safe Pace' }
      ];
      await Goal.insertMany(mockGoals);
      goals = await Goal.find({ userId });
    }
    res.json(goals);
  } catch (err) {
    console.error('Goal fetch error:', err);
    res.status(500).json({ error: 'Server error fetching goals' });
  }
});

module.exports = router;
