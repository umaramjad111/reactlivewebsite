import React from 'react'
import img1 from './images/contact.jpg';

export default function Contact() {
    return (
        <div>
            <section className="contact mb-5">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <h3 className="text-center display-6 ">Contact Us</h3>
                            <hr className="w-25 ms-auto me-auto"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                        <img src={img1} alt="business" className="rounded-pill imgzoom h-75 w-75 my-auto" />
                            
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                <label className="mb-2" htmlFor="">Enter Your Name</label>
                                <input type="text" className="form-control" placeholder="umar amjad"  />
                                </div>
                               
                                <div className="mb-3">
                                <label className="mb-2" htmlFor="">Enter Your Email</label>
                                <input type="email" className="form-control" placeholder="umaramjad983@mail.com" />

                                </div>
                                 <div className="mb-3">
                                 <textarea name="" id="" rows="5" className="form-control"></textarea>
                                 </div>
                               
                                 <div className="mb-3">
                                     <button className="btn btn-outline-primary">
                                         Send Message
                                     </button>
                                 </div>
                                   </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
