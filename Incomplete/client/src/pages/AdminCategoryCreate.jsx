import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminCategoryCreate() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    // TODO(student): POST `{ name }` as JSON to `${API_BASE}/categories`, then navigate('/admin/categories').
    navigate('/admin/categories');
  };

  return (
    <section>
      <div className="page-header"><h1>Create Category</h1><p>Add a category record.</p></div>
      <div className="admin-section">
        <div className="admin-toolbar"><Link className="btn" to="/admin/categories">Back to Categories</Link></div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            {/* TODO(student): Convert this to a controlled input:
                value={name}
                onChange={(e) => setName(e.target.value)}
            */}
            <input placeholder="Category name" required />
            <button className="btn" type="submit">Create Category</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminCategoryCreate;
