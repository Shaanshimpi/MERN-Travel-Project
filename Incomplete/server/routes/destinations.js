const express = require('express');
const Destination = require('../models/Destination');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // TODO(student): Return all destinations from MongoDB.
    const destinations = [];
    res.json(destinations);
  } catch (error) {
    console.log('GET /api/destinations error:', error.message);
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    // TODO(student): Create a destination from req.body and return status 201 with created doc.
    res.status(201).json({});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(destination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // TODO(student): Update destination by id using req.body and return updated doc.
    const updatedDestination = null;
    if (!updatedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json(updatedDestination);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // TODO(student): Delete destination by id and respond with delete success message.
    const deletedDestination = null;
    if (!deletedDestination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.json({ message: 'Destination deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
