import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminCategories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    // TODO(student): fetch(`${API_BASE}/categories`), parse JSON with res.json(), then setCategories to the result if it is an array, otherwise [].
    setCategories([]);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const deleteCategory = async (id) => {
    // TODO(student): DELETE category by id using `${API_BASE}/categories/${id}`,
    // then call loadCategories() so the table refreshes.
  };

  return (
    <section>
      <div className="page-header">
        <h1>Admin: Categories</h1>
        <p>Create, update, and delete categories.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <div className="admin-toolbar-nav">
            <Link className="btn btn-admin-tab" to="/admin">Admin Home</Link>
            <Link className="btn btn-admin-tab" to="/admin/blogs">Blogs</Link>
            <Link className="btn btn-admin-tab" to="/admin/destinations">Destinations</Link>
          </div>
          <Link className="btn btn-create" to="/admin/categories/new">+ Create Category</Link>
        </div>

        <div className="admin-card">
          <h3>All Categories</h3>
          <div className="admin-table">
            <div className="admin-table-head">
              <span>Name</span>
              <span>Actions</span>
            </div>
            {/* TODO(student): Render rows from `categories` using categories.map((item) => ...).
                Keep this exact structure/classes for styling:
                <div key={item._id} className="admin-table-row">
                  <span>{item.name || item.title}</span>
                  <div className="admin-actions">
                    <Link className="btn" to={`/admin/categories/edit/${item._id}`}>Edit</Link>
                    <button className="btn danger" type="button" onClick={() => deleteCategory(item._id)}>Delete</button>
                  </div>
                </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminCategories;
