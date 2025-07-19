const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: String,
  position: String,
  link: String,
  status: String,
  notes: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);