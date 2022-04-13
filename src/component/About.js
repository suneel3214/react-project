import React, { useState,Component } from 'react'
import correct from '../component/images/correct.png';

export default function About(props) {
   
          
  return (
    <div className='container font' id='about'><hr />
        <h1 className='font-color'>About Us</h1>
        <div className="row">
           <div className="col-md-6">
               <h3 className='font-color'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda</h3>
               <h5 className='font-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
               <span className='font-color'><i class="fa-solid fa-circle-chevron-right"></i>  Ullamco laboris nisi ut aliquip ex ea commodo consequat</span><br />
               <span className='font-color'><i class="fa-solid fa-circle-chevron-right"></i>  Duis aute irure dolor in reprehenderit in voluptate velit.</span><br />
              <span className='font-color'><i class="fa-solid fa-circle-chevron-right"></i>  Ullamco laboris nisi ut aliquip ex ea commodo 
              consequat. Duis aute irure dolor in reprehenderit in 
              voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
              <h5 className='font-color'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                   esse cillum dolore eu fugiat nulla pariatur.
                   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h5>
           </div>
           <div className="col-md-6">
               <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/about.jpg" style={{width: "100%"}} alt="" />
           </div>
        </div>
    </div>
  )
}
