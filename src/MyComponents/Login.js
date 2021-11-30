import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <section className="login">
                <div className="container shadow my-5">
                    <div className="row bg-primary ">
                        <div className=" col-md-6 d-flex flex-column align-items-center text-black justify-content-center shadow"  id="loginback">

                            <h3 className="display-6 fw-bolder">Welcome Back</h3>
                        <p className="lead">Enter your details to login</p>
                            <p className="">OR</p>
                            <Link to="/register" className="btn btn-outline-success rounded-pill w-50">Register</Link>
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-center text-black shadow" id="loginback" >

                         <h3 className="display-6 fw-bolder mb-4 text-center">Login</h3>
                          <form>
                              <div className="mb-3">
                              <label htmlFor="exampleInputEmail" className="form-label mb-1">
                                  Email Address</label>
                                  <input type="email" className="form-control" id="exampleInputEmail"  />

                              </div>
                              <div className="mb-3">
                              <label htmlFor="exampleInputpassword1" className="form-label mb-1">
                                  Password</label>
                                  <input type="password" className="form-control" id="exampleInputpassword1"  />

                              </div>
                            
                          </form>
                          <Link to="/register" className="btn btn-outline-success rounded-pill w-50 mx-auto">Login</Link>
                          </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
