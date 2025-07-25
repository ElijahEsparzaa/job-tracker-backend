const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow requests only from your deployed frontend URL
app.use(cors({
  origin: 'https://job-tracker-frontend-umber.vercel.app',
}));

app.use(express.json());

const jobRoutes = require('./routes/jobs');
app.use('/api/jobs', jobRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));