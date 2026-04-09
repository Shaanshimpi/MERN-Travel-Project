const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // TODO(student): Return all categories from MongoDB.
    const categories = [];
    res.json(categories);
  } catch (error) {
    console.log('GET /api/categories error:', error.message);
    res.json([]);
  }
});

router.post('/', async (req, res) => {
  try {
    // TODO(student): Create a category from req.body and return status 201 with created doc.
    res.status(201).json({});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // TODO(student): Update one category by id with req.body and return the updated document.
    const updatedCategory = null;
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // TODO(student): Delete one category by id and return { message: 'Category deleted' }.
    const deletedCategory = null;
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
