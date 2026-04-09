import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminDestinationCreate() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    // TODO(student): POST `{ name }` to `${API_BASE}/destinations`, then navigate('/admin/destinations').
    navigate('/admin/destinations');
  };

  return (
    <section>
      <div className="page-header"><h1>Create Destination</h1><p>Add a destination record.</p></div>
      <div className="admin-section">
        <div className="admin-toolbar"><Link className="btn" to="/admin/destinations">Back to Destinations</Link></div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            {/* TODO(student): Make this controlled with `name` and `setName`. */}
            <input placeholder="Destination name" required />
            <button className="btn" type="submit">Create Destination</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminDestinationCreate;
