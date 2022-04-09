import React from 'react'
import socialmarketing from '../component/images/socialmarketing.png'
import facebook from '../component/images/facebook.png'
import instagram from '../component/images/instagram.png'
import twitter from '../component/images/twitter.png'
import whatsapp from '../component/images/whatsapp.png'


export default function Footer() {

  return (
    <div className="container-fluide navbar-color">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top container">
        <div className="col-md-4 d-flex align-items-center">
        <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <img src={socialmarketing} width="24" height="24" alt="" />
        </a>
        {/* <span className="icon">&copy; 2022 Company, Inc </span><br /> */}
        <span className="icon">Developed By:- SUNEEL All Rights Has Been Reserved &copy; 2022 Company, Inc</span>

        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-muted" href="#"><img src={facebook} width="24" height="24" alt="" /></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><img src={instagram} width="24" height="24" alt="" /></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><img src={twitter} width="24" height="24" alt="" /></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><img src={whatsapp} width="24" height="24" alt="" /></a></li>
        </ul>
    </footer>
</div>
  )
}
{/* <img src={require('./logo.jpeg').default} /> */}