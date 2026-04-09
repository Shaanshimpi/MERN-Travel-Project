import { useEffect, useState } from 'react';
import { API_BASE } from '../apiConfig';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
      });

    fetch(`${API_BASE}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []));

    fetch(`${API_BASE}/destinations`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // TODO(student): Filter the list for the UI. Start from `blogs` and assign to `filteredBlogs`:
  // - If `titleFilter` is non-empty, keep posts whose title contains that text (ignore case).
  // - If `categoryId` is set, keep posts where blog.categoryId === categoryId.
  // - If `destinationId` is set, keep posts where blog.destinationId === destinationId.
  // Hint: You can chain .filter() calls or combine conditions in one filter callback.
  let filteredBlogs = blogs;

  return (
    <section>
      <div className="page-header">
        <h1>All Stories</h1>
        <p>Filter stories by title, category, and destination.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title"
          value={titleFilter}
          onChange={(event) => setTitleFilter(event.target.value)}
        />
        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">All Categories</option>
          {/* TODO(student): Render category options with this shape:
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name || category.title}
                </option>
              ))}
              Keep the select class/position unchanged.
          */}
        </select>
        <select
          value={destinationId}
          onChange={(event) => setDestinationId(event.target.value)}
        >
          <option value="">All Destinations</option>
          {/* TODO(student): Render destination options with key/value from destination._id
              and label {destination.name || destination.title}.
          */}
        </select>
      </div>

      {loading ? <p>Loading...</p> : null}

      <div className="blog-list">
        {/* TODO(student): Render cards with filteredBlogs.map((blog) => ...).
            Keep this structure/classes:
            - <article className="blog-card">
            - <img ... /> with img fallback URL
            - <h3>, <p>content</p>, author line
            - <div className="tag-row"> with trend/feature badge spans
        */}
      </div>
      {!loading && filteredBlogs.length === 0 ? <p>No blogs found.</p> : null}
    </section>
  );
}

export default Blogs;
