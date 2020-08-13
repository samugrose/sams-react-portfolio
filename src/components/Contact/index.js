import React from 'react'
import './style.css'

export default function index() {
    return (
        <div className="container ">

            <div className="row-md-12">
                <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <section className="row-md-12">
                        <section className="col-md-12">
                            <h3 className="padded">Contact Me</h3>
                        </section>
                    </section>
                    <form>
                        <div className="form-group">
                            <label >Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2"
                                placeholder="name@example.com" />
                        </div>
                        <div className="form-group">
                            <label >Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
