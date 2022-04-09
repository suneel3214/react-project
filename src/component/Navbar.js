import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import socialmarketing from '../component/images/socialmarketing.png'
import {Link} from 'react-scroll'

export default function Navbar(props) {
  return (
    <div>
      {/* {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} */}
      <nav className="navbar navbar-expand-lg navbar-color fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={socialmarketing} width="35px" alt="image not found" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="show" spy={true} smooth={false}  aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="about" spy={true} smooth={false} aria-current="page">About</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="whychoose" spy={true} smooth={false} aria-current="page">Why Choose</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="team" spy={true} smooth={false} aria-current="page">Profession</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="contact" spy={true} smooth={false} aria-current="page">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register" spy={true} smooth={false} aria-current="page">Register</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Login</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
     </nav>
    </div>
  )
}
