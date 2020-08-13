import React from 'react'
import './style.css'
import Spon from './images/spont.png'

export default function index(props) {
    return (
        <div className="container d-flex flex-column align-items-center">
            <section className="row-md-12">
                <h3 className="padded">Portfolio</h3>
            </section>
            <section className="row d-flex justify-content-around align-items-end">
                <section className="col-md-5 d-flex justify-content-center align-items-center">
                    <a href="https://spontaneouslynow.herokuapp.com/" target="_blank">
                        <img src={Spon} alt="DEF!" className="img-fluid" />

                        <figure className="row d-flex align-items-end justify-content-center">
                            <h6 className="hoverable">Spontaneously Now!</h6>
                        </figure>
                    </a>
                </section>
            </section>
        </div >
    )
}
