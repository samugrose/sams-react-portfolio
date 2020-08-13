import React from 'react'
import './style.css'
import Headshot from './images/sams-headshot.jpg'

export default function index() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <section className="row d-flex flex-column align-items-center justify-content-center">
                <section className="col-md-12 d-flex justify-content-center">
                    <h3 className="padded">About Me</h3>
                </section>
                <section className="col-md-12 d-flex justify-content-center" id="index-name">
                    <h5 className="padded">Sam Grose</h5>
                </section>
                <section className="row">
                    <section className="col-md-5 d-flex justify-content-center">
                        <img className="img-fluid" src={ Headshot} alt="Sam's Headshot" />
                    </section>
                    <aside className="col-md-7 d-flex flex-column align-items-center justify-content-center">
                        <p>Nice to meet you! I'm a creative polyglot becoming a full stack developer, with the intent to run
                        a food blog.</p>
                        <section className="container">
                            <section className="row d-flex ">
                                <section className="col-md-6">
                                    <p> <strong>Foreign Languages I speak:</strong></p>
                                    <ul>
                                        <li>Spanish</li>
                                        <li>Portuguese (Brazilian)</li>
                                        <li>Mandarin</li>
                                    </ul>
                                </section>
                                <section className="col-md-6">
                                    <p> <strong>Programming Languages:</strong></p>
                                    <ul>
                                        <li>Java</li>
                                        <li>Javascript</li>
                                        <li>HTML/CSS</li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                        <p><q>Knowledge and understanding can only increase the odds of success</q></p>
                        <p>- Gordon LaVelle</p>
                    </aside>
                </section>
            </section>
        </div>
    )
}
