import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminDestinationEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    // TODO(student): GET destination by id; setName from d.name || d.title || ''.
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();
    // TODO(student): PUT `{ name }` to `${API_BASE}/destinations/${id}`, then navigate('/admin/destinations').
    navigate('/admin/destinations');
  };

  return (
    <section>
      <div className="page-header"><h1>Edit Destination</h1><p>Update a destination record.</p></div>
      <div className="admin-section">
        <div className="admin-toolbar"><Link className="btn" to="/admin/destinations">Back to Destinations</Link></div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            {/* TODO(student): Bind this input to destination `name` state. */}
            <input placeholder="Destination name" required />
            <button className="btn" type="submit">Update Destination</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminDestinationEdit;
