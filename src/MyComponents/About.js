import React from 'react';
import img1 from './images/bus.jpg';

export default function About() {
    return (
        <div>
            <section className="about">
                <div className="container mb-3">
                    <div className="row ">
                        <div className="col-md-6 mt-3 d-flex justify-content-center">
                           
                            <img src={img1} alt="business" className="rounded-pill imgzoom h-75 w-75 my-auto" />
                          
                        </div>
                        <div className="col-md-6 mt-3">
                            <h3 className="fs-2 fw-bolder mt-5">About Us</h3>
                            <div className="underline mb-3"></div>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ex perferendis dolores consequuntur labore modi nostrum! Voluptatum animi cupiditate veniam! Quaerat iure illo minus sed magni officiis excepturi consequuntur expedita!
                            </p>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ex perferendis dolores consequuntur labore modi nostrum! Voluptatum animi cupiditate veniam! Quaerat iure illo minus sed magni officiis excepturi consequuntur expedita!
                            </p>
                            <button className="btn btn-outline-secondary rounded-pill px-4 py-2">Get Started</button>
                            <button className="btn btn-secondary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                          
                        </div>
                      
                    </div>
                   
                </div>
                <div className="container d-flex justify-content-center mt-3">
                <hr className="w-75 d-flex"/>
                </div>
               
            </section>
        </div>
    )
}
