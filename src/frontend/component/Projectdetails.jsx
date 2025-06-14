import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Projectdetails() {
  const { projectId} = useParams();
  const [projects, setProjects] = useState(null);
  const [project_details, setProject_Details] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/projects/${projectId}`)
      .then(res => res.ok ? res.json() : Promise.reject('Not found'))
      .then(data => {
        setProjects(data);
        setProject_Details(project_details);
        setLoading(false);
      })
      .catch(() => setLoading(false));
      }, [projectId]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setFormStatus('');
    if ( !project_details?.id ){
      setFormStatus('Error: Project details ID is missing.');
      return
    }
    try{
      const response = await fetch(`http://localhost:8080/api/project-inquiries/`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
      });
    
     if (!response.ok ){
      const errorData = await response.json();
      setForm ({name: '', email: '', message: ''})
      return
     }
     setFormStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
      }catch (error) {
        setFormStatus(`Error sending message: ${error.message}`);
      }
    };
     
  if (loading) return <div className="container mt-5 pt-5">Loading...</div>;
  if (!projects) return <div className="container mt-5 pt-5">Project not found.</div>;

  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={projects.imageUrl} alt={projects.name} className=" rounded shadow mb-3 imgproyectdetails img-fluid" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-3">{projects.name}</h2>
            <p className="mb-4">{projects.description}</p>
            {project_details && (
              <div className="mb-4">
                <h5>More Details</h5>
                <p>{project_details.detailed_description}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className='form2'>
              <h5 className="mb-3">Interested in this project?</h5>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name 1" name="name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email 2" name="email" required value={form.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message 3" name="message" rows="3" required value={form.message} onChange={handleChange}></textarea>
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