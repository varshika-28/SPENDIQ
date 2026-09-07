const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login or Register
router.post('/login', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email });
      await user.save();
    }
    res.json(user);
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

module.exports = router;
