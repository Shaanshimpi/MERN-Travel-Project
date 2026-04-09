import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminBlogCreate() {
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
    // TODO(student): Load both dropdown datasets on mount:
    // 1) GET categories -> setCategories(Array.isArray(d) ? d : [])
    // 2) GET destinations -> setDestinations(Array.isArray(d) ? d : [])
  }, []);

  const onChange = (event) => {
    // TODO(student): Update `form` using input `name`.
    // Use `checked` when input type is checkbox, otherwise use `value`.
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // TODO(student): POST to `${API_BASE}/blogs` with method POST, header Content-Type application/json, body JSON.stringify(form). Await it, then navigate to '/admin/blogs'.
    navigate('/admin/blogs');
  };

  return (
    <section>
      <div className="page-header">
        <h1>Create Blog Post</h1>
        <p>Add a new blog record.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <Link className="btn" to="/admin/blogs">Back to Blogs</Link>
        </div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              {/* TODO(student): Make these controlled inputs:
                  - keep `name="title"` and `name="author"`
                  - add value={form.title/form.author}
                  - add onChange={onChange}
                  Do not change the existing `form-row` wrapper/className.
              */}
              <input name="title" placeholder="Title" required />
              <input name="author" placeholder="Author" required />
            </div>
            {/* TODO(student): Bind imgUrl input with value={form.imgUrl} and onChange={onChange}. */}
            <input name="imgUrl" placeholder="Image URL" required />
            <div className="form-row">
              {/* TODO(student): Keep this select name/categoryId and bind value/onChange.
                  Also render:
                  {categories.map((item) => (
                    <option key={item._id} value={item._id}>{item.name || item.title}</option>
                  ))}
              */}
              <select name="categoryId" required>
                <option value="">Select category</option>
              </select>
              {/* TODO(student): Keep this select name/destinationId and bind value/onChange.
                  Also render destination options with key/value from item._id.
              */}
              <select name="destinationId" required>
                <option value="">Select destination</option>
              </select>
            </div>
            {/* TODO(student): Bind textarea as controlled field: value={form.content} + onChange={onChange}. */}
            <textarea name="content" placeholder="Content" required />
            <div className="form-row">
              {/* TODO(student): For both checkboxes keep label text/classes and add:
                  checked={form.isTrending/form.isFeatured}
                  onChange={onChange}
              */}
              <label><input type="checkbox" name="isTrending" /> Trending</label>
              <label><input type="checkbox" name="isFeatured" /> Featured</label>
            </div>
            <button className="btn" type="submit">Create Blog</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminBlogCreate;
