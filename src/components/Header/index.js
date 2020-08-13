import React from 'react'
import "./style.css"

export default function index() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark .bg-success">
                <a className="navbar-brand" href="index.html">Sam Grose</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <section className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio.html">Portfolio</a>
                        </li>
                        
                    </ul>
                </section>
            </nav>
        </div>
    )
}
