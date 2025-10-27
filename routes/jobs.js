const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

//Create
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (err) {
    console.error('POST /api/jobs error:', err);  //Log error to console
    res.status(500).send(err.message);
  }
});

//Read all
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error('GET /api/jobs error:', err);
    res.status(500).send(err.message);
  }
});

//Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error('PUT /api/jobs/:id error:', err);
    res.status(500).send(err.message);
  }
});

//Delete
router.delete('/:id', async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
  } catch (err) {
    console.error('DELETE /api/jobs/:id error:', err);
    res.status(500).send(err.message);
  }
});

module.exports = router;