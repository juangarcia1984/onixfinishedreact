import React from 'react'
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '' || password === '' || email === '' || rol === '') {
      setError('Please complete all fields.');
    } else {
      setError('');
      try{
        const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password, email, rol }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || 'Login failed. Please try again.');
        }else {
          window.location.href = '/dashboard'; // Redirección exitosa
        }
      } catch (error) {
        setError(error.message || 'An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 container mt-5 pt-5" id="login">
      <div className="row shadow rounded bg-white overflow-hidden" style={{ maxWidth: 800, width: '100%' }}>

        {/* Columna de la imagen */}
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center p-4">
          <img
            src="/public/plantilla-onix/imagenes/Untitled design.png"
            alt="Imagen decorativa"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}/>
        </div>
        
        {/* Columna del formulario */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <div className="text-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Logo"
              className="rounded-circle mb-3 bi bi-person-circle"
              style={{ width: "35%" }}  />
            <h2 className="text-dark ">Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label"><strong>User</strong></label>
              <input type="text" className="form-control" id="username" name="usrname" placeholder="Enter your username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"><strong>Password</strong></label>
              <input type="password" className="form-control" id="password" name="psw" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"><strong>Email</strong></label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="rol" className="form-label"><strong>Rol</strong></label>
              <input type="text" className="form-control" id="rol" name="rol" placeholder="Enter your role" required value={rol} onChange={(e) => setRol(e.target.value)} />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn w-100" style={{ backgroundColor: '#000', color: '#fff' }}>Login</button>
          </form>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="button" className="btn " style={{ backgroundColor: '#000', color: '#fff' }}>Cancel</button>
            <small className="text-muted">Forgot your <a href="#">password?</a></small>
          </div>
          {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
        </div>
      </div>
    </div>
  )
}