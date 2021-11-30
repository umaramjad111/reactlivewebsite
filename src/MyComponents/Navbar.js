import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow" id = "navback">
  <div className="container">
    <Link className="navbar-brand fw-bold fs-2 mr-auto webtitle" to="/">UmarTechnical</Link>
    <button className="navbar-toggler thoreedotbtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
       <Link className="btn btn-outline-light ms-auto py-2 px-4 rounded-pill" to="/login">
       <i class="fas fa-sign-in-alt me-2"></i> Login</Link>
       <Link className="btn btn-outline-light rounded-pill px-4 ms-2" to="/register">
       <i class="fas fa-user-plus me-2"></i> Register</Link>
       <Link className="btn btn-outline-light rounded-pill px-4 ms-2 mt-1" to="/dashboard">
       <i class="fas fa-columns me-2"></i> Dashboard</Link>
    </div>
  </div>
</nav>
        </div>
    )
}

