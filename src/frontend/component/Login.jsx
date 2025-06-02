import React from 'react'

export default function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 container mt-5 pt-5" id="login">
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

          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label"><strong>User</strong></label>
              <input type="text" className="form-control" id="username" name="usrname" placeholder="Enter your username" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"><strong>Password</strong></label>
              <input type="password" className="form-control" id="password" name="psw" placeholder="Enter your password" required />
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



  )
}