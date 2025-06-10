import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/navbar'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/Authcontext'




export default function Loginpage() {
  const { Login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          email: data.email,
          rol: data.rol,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || 'Login failed. Please try again.');
        return;
      }
      const userverify = await response.json();
      console.log('user :', userverify);

      Login(userverify);
     if (userverify.rol === 'admin') {
            navigate('/dashboard'); // Redirect to admin dashboard
        } else if (userverify.rol === 'user') {
            navigate('/'); // Redirect to user dashboard
        } else {
            alert('Unknown role. Please contact support.');
        }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
    
  };
  return (
    <div>
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
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
                style={{ width: "35%" }} />
                <h2 className="text-dark ">Login</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>User</strong></label>
                <input {...register("username",{required:true})} type="text" className="form-control" id="username" name="username" placeholder="Enter your username"  />
              </div>
              {errors.username && <span className="text-danger">This field is required</span>}
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                <input {...register("password",{required:true})} type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
              </div>
              {errors.password && <span className="text-danger">This field is required</span>}
              <div className="mb-3">
                <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                <input {...register("email",{required:true})} type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                  <label htmlFor="rol" className="form-label"><strong>Role</strong></label>
                  <select {...register("rol", { required: true })} className="form-control" id="rol">
                  <option value="">Select Role</option>
                  <option value="user">User </option>
                  <option value="admin">Admin</option>
             </select>
            </div>
              {errors.email && <span className="text-danger">This field is required</span>}
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

