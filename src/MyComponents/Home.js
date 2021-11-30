import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'

export default function Home() {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-5 text-center text-white">
                                Business  Perspectives with Umar
                            </h1>
                            <p className="lead text-center mb-5 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis ad dignissimos nulla 
                                voluptatum culpa deleniti accusantium quidem maiores, quis quae neque sint? Commodi minima, odio
                                 aperiam illum
                                 velit sapiente?
                                 culpa deleniti accusantium quidem maiores, quis quae neque sint? Commodi minima, odio
                                 aperiam illum
                                 velit sapiente?
                                 <div className="buttons dflex justify-content-center mt-5">
                                     <button className="btn btn-light me-4 py-2 px-4 rounded-pill">Get Quote</button>
                                     <button className="btn btn-outline-light me-4 py-2 px-4 rounded-pill">Our Services</button>
                                
                                 </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    )
}
