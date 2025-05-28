import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/navbar'
import { useForm } from 'react-hook-form'
import datos from '/src/assets/data.json';
import { useAuth } from '../../context/Authcontext'
import getdasboard from '../../components/common/Getdasboard'



export default function Loginpage() {
  let { Login } = useAuth();
  let navigate = useNavigate();
  let { register, handleSubmit } = useForm();
  const onSubmit = (dataform) => {
    console.log(dataform);

    let userverify = datos.usuarios.find((usuarios) => {
      return usuarios.username === dataform.username && usuarios.password === dataform.password;
    });
    console.log('user : ', userverify);
    if (userverify) {
      Login(userverify);
      navigate(getdasboard(userverify.rol));
    } else {
      
      alert('Incorrect username or password');
    }


  }
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
              style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>


          {/* Columna del formulario */}
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <div className="text-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Logo"
                className="rounded-circle mb-3 bi bi-person-circle"
                style={{ width: "35%" }}
              />
              <h2 className="text-dark ">Login</h2>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label"><strong>User</strong></label>
                <input {...register("username",{required:true})} type="text" className="form-control" id="username" name="username" placeholder="Enter your username"  />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                <input {...register("password",{required:true})} type="password" className="form-control" id="password" name="password" placeholder="Enter your password" required />
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
