// server/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importing routes
const chatRoutes = require('./routes/chat');
const imageRoutes = require('./routes/image');
const codeRoutes = require('./routes/code');
const voiceRoutes = require('./routes/voice');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/code', codeRoutes);
app.use('/api/voice', voiceRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 INDIAGPT backend running on port ${PORT}`);
});
