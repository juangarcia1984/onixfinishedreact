import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Projectdetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/projects/${projectId}`)
      .then(res => res.ok ? res.json() : Promise.reject('Not found'))
      .then(data => {
        setProject(data);
        
        setDetails(data.projectDetails);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [projectId]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormStatus('');
    fetch(`http://localhost:8080/api/project-inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        projectDetailsId: details?.id 
      })
    })
      .then(res => res.ok ? res.json() : Promise.reject('Error'))
      .then(() => {
        setFormStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => setFormStatus('Error sending message.'));
  };

  if (loading) return <div className="container mt-5 pt-5">Loading...</div>;
  if (!project) return <div className="container mt-5 pt-5">Project not found.</div>;

  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={project.imageUrl} alt={project.name} className="img-fluid rounded shadow mb-3" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-3">{project.name}</h2>
            <p className="mb-4">{project.description}</p>
            {details && (
              <div className="mb-4">
                <h5>More Details</h5>
                <p>{details.detailedDescription}</p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <h5 className="mb-3">Interested in this project?</h5>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required value={form.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3" required value={form.message} onChange={handleChange}></textarea>
              </div>
              {formStatus && <div className="alert alert-info">{formStatus}</div>}
              <button type="submit" className="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}