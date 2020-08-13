import React from 'react'
import './style.css'

export default function footer() {
    return (
        <div>
            <footer className="footer d-flex justify-content-around fixed-bottom align-items-center">
                <h6>&copy; Grose Ventures 2020</h6>
                <a href="https://www.linkedin.com/in/samuel-grose-219178142/"><i className="fa fa-linkedin"
                    aria-hidden="true"></i></a>
                <a href="https://github.com/samugrose"><i className="fa fa-github" aria-hidden="true"></i></a>
            </footer>
        </div>
    )
}
