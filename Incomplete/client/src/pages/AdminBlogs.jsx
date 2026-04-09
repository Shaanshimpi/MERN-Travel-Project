import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = () => {
    // TODO(student): Same pattern as AdminCategories: GET /blogs from API_BASE, parse JSON, setBlogs(Array.isArray(data) ? data : []).
    setBlogs([]);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const deleteBlog = async (id) => {
    // TODO(student): DELETE blog by id with method DELETE,
    // then call loadBlogs() to update the list.
  };

  return (
    <section>
      <div className="page-header">
        <h1>Admin: Blogs</h1>
        <p>Create, update, and delete blogs.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <div className="admin-toolbar-nav">
            <Link className="btn btn-admin-tab" to="/admin">Admin Home</Link>
            <Link className="btn btn-admin-tab" to="/admin/categories">Categories</Link>
            <Link className="btn btn-admin-tab" to="/admin/destinations">Destinations</Link>
          </div>
          <Link className="btn btn-create" to="/admin/blogs/new">+ Create Blog</Link>
        </div>

        <div className="admin-card">
          <h3>All Blog Posts</h3>
          <div className="admin-table">
            <div className="admin-table-head">
              <span>Title</span>
              <span>Author</span>
              <span>Actions</span>
            </div>
            {/* TODO(student): Build rows with blogs.map((blog) => ...).
                Keep this row structure/classes:
                <div key={blog._id} className="admin-table-row">
                  <span>{blog.title || 'Untitled'}</span>
                  <span>{blog.author || 'Unknown author'}</span>
                  <div className="admin-actions">
                    <Link className="btn" to={`/admin/blogs/edit/${blog._id}`}>Edit</Link>
                    <button className="btn danger" type="button" onClick={() => deleteBlog(blog._id)}>Delete</button>
                  </div>
                </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminBlogs;
