require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const goalRoutes = require('./routes/goalRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/spendiq', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB, check if it is running:', err);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/goals', goalRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SpendIQ Backend is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
