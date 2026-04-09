const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // TODO(student): Return all blogs from MongoDB using Blog.find().
    const blogs = [];
    res.json(blogs);
  } catch (error) {
    console.log('GET /api/blogs error:', error.message);
    res.json([]);
  }
});

router.get('/trending', async (req, res) => {
  try {
    // TODO(student): Return only trending blogs from MongoDB.
    const blogs = [];
    res.json(blogs);
  } catch (error) {
    console.log('GET /api/blogs/trending error:', error.message);
    res.json([]);
  }
});

router.get('/featured', async (req, res) => {
  try {
    // TODO(student): Return only featured blogs from MongoDB.
    const blogs = [];
    res.json(blogs);
  } catch (error) {
    console.log('GET /api/blogs/featured error:', error.message);
    res.json([]);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // TODO(student): Create a blog from req.body and return status 201 with the created document.
    res.status(201).json({});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // TODO(student): Update one blog by id and return the updated document (use new: true).
    const updatedBlog = null;

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // TODO(student): Delete one blog using req.params.id.
    const deletedBlog = null;

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
