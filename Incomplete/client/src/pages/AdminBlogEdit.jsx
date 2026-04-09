import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminBlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
    imgUrl: '',
    categoryId: '',
    destinationId: '',
    isTrending: false,
    isFeatured: false
  });

  useEffect(() => {
    // TODO(student): Load categories and destinations for the two select inputs.
    // Hint: same approach as create page with two fetch calls + Array.isArray guard.
    // TODO(student): Fetch `${API_BASE}/blogs/${id}`, parse JSON into `blog`, then setForm({ ... }) with title, content, author, imgUrl, categoryId, destinationId, isTrending, isFeatured (use || '' for strings, !! for booleans).
  }, [id]);

  const onChange = (event) => {
    // TODO(student): Update `form` field-by-field from event.target.
    // Use checkbox checked state for boolean flags.
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // TODO(student): PUT to `${API_BASE}/blogs/${id}` with JSON body `form` and correct headers; then navigate('/admin/blogs').
    navigate('/admin/blogs');
  };

  return (
    <section>
      <div className="page-header">
        <h1>Edit Blog Post</h1>
        <p>Update blog details.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <Link className="btn" to="/admin/blogs">Back to Blogs</Link>
        </div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              {/* TODO(student): Restore controlled bindings exactly like create/edit form pattern:
                  value={form.title/form.author} + onChange={onChange}, keep `name` attrs unchanged.
              */}
              <input name="title" placeholder="Title" required />
              <input name="author" placeholder="Author" required />
            </div>
            {/* TODO(student): Bind imgUrl input as controlled: value={form.imgUrl}, onChange={onChange}. */}
            <input name="imgUrl" placeholder="Image URL" required />
            <div className="form-row">
              {/* TODO(student): Bind category select (value/onChange) and render category options from `categories`.
                  Keep existing wrapper `div.form-row` and select class structure.
              */}
              <select name="categoryId" required>
                <option value="">Select category</option>
              </select>
              {/* TODO(student): Bind destination select (value/onChange) and render options from `destinations`. */}
              <select name="destinationId" required>
                <option value="">Select destination</option>
              </select>
            </div>
            {/* TODO(student): Bind textarea content with value={form.content} + onChange={onChange}. */}
            <textarea name="content" placeholder="Content" required />
            <div className="form-row">
              {/* TODO(student): Restore checkbox bindings:
                  isTrending -> checked={form.isTrending}
                  isFeatured -> checked={form.isFeatured}
                  both use onChange={onChange}
              */}
              <label><input type="checkbox" name="isTrending" /> Trending</label>
              <label><input type="checkbox" name="isFeatured" /> Featured</label>
            </div>
            <button className="btn" type="submit">Update Blog</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminBlogEdit;
