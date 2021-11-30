import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
        <section className="login">
            <div className="container shadow my-5">
                <div className="row bg-primary ">
                    <div className=" col-md-6 d-flex flex-column align-items-center text-black justify-content-center shadow order-2"  id="loginback">

                        <h3 className="display-6 fw-bolder">Hello Friends</h3>
                    <p className="lead">Enter your details to Register</p>
                        <p className="">OR</p>
                        <Link to="/login" className="btn btn-outline-success rounded-pill w-50">Login</Link>
                    </div>

                    <div className="col-md-6 d-flex flex-column justify-content-center text-black shadow " id="loginback" >

                     <h3 className="display-6 fw-bolder mb-4 text-center">Register</h3>
                      <form>
                      <div className="mb-3">
                          <label htmlFor="name" className="form-label mb-1">
                              Username</label>
                              <input type="text" className="form-control" id="name"  />

                          </div>
                          <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label mb-1">
                              Email Address</label>
                              <input type="email" className="form-control" id="exampleInputEmail"  />

                          </div>
                          <div className="mb-3">
                          <label htmlFor="exampleInputpassword1" className="form-label mb-1">
                              Password</label>
                              <input type="password" className="form-control" id="exampleInputpassword1"  />

                          </div>
                        
                      </form>
                      <Link to="/contact" className="btn btn-outline-success rounded-pill w-50 mx-auto">Register</Link>
                      </div>
                </div>
            </div>
        </section>
    </div>
    )
}
