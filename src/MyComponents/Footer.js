import React from 'react'
import '../App.css';

export default function Footer() {
    return (
        <div>
            <section className="footer" id="home2">
              <div className="container">
                  <div className="row py-5">
                     
                          <div className="col-md-4 mb-3">
                              <h3 className=" display-6 text-white text-center">
                                  Company Profile
                              </h3>
                              <p className="lead text-white text-center">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eum repellat est. Nulla aliquam at voluptas ducimus officiis accusamus nobis, labore voluptatibus cum placeat ut consectetur impedit animi sint magni?
                              </p>
                          </div>

                          <div className="col-md-4 d-flex justify-content-center">
                            <img className="rounded-pill" src="/images/business.jpg" width="400px"  alt="business" />
                          </div>
                
                         <div className="col-md-4 mt-4">
                              <h3 className=" display-6 text-white text-center">
                                  Welcome t our company
                              </h3>
                              <p className="lead text-white text-center">
                                 Please if you have any query contact us
                                   </p>
                                   <form className="text-center" action="">
                                       <input type="text" placeholder="Email Address" />
                                       <button className="btn btn-outline-primary rounded-pill ms-3 mb-2">Subscribe</button>
                                   </form>
                          </div>
                
                  </div>
                  {/* <div className="row">
                      <div className="col">
                      <i class="fab fa-instagram text-white fa-2x"></i>
                      </div>
                      <div className="col">
                      <i class="fab fa-instagram text-white fa-2x"></i>
                      </div>
                      <div className="col">
                      <i class="fab fa-instagram text-white fa-2x"></i>
                      </div>
                  </div> */}

                   <div className="container pb-3">
                   <div className="row  socialmedias">
                      <div className="col">
                      <i className="fab fa-instagram text-white fa-2x"></i>
                      </div>
                      <div className="col">
                      <i className="fab fa-twitter text-white fa-2x"></i>
                      </div>
                      <div className="col">
                      <i className="fab fa-google text-white fa-2x"></i>
                      </div>
                     
                   </div>
                 
                  </div>
                  
             
             </div>
            </section>
            
        </div>
    )
}
