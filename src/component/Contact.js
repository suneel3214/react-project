import React from 'react'
import location from '../component/images/location.png';
import chronometer from '../component/images/chronometer.png';
import email from '../component/images/email.png';
import phonecall from '../component/images/phone-call.png';
import customer from '../component/images/customer.jpg';


export default function Contact() {
  
  
  
  return (
    <div className='container mt-5' id='contact'><hr />
        <h1 className='font-color'>Our Contact Us</h1>
      <div className="row">
        <div className="col-md-4">
          <span className='font-color' style={{fontSize: "25px"}}><img src={location} alt=""  style={{width: "20px"}} /> Location:</span>
          <p  className='font-color'> A.B Road Guna 473115</p>
          <span className='font-color' style={{fontSize: "25px"}}><img src={chronometer} alt=""  style={{width: "20px"}} /> Open Hours:</span>
          <p  className='font-color'> Monday-Saturday:11:00 AM - 2300 PM</p>
          <span className='font-color' style={{fontSize: "25px"}}><img src={email} alt=""  style={{width: "20px"}} /> Email:</span>
          <p  className='font-color'>sunil32145@gmail.com</p>
          <span className='font-color' style={{fontSize: "25px"}}><img src={phonecall} alt=""  style={{width: "20px"}} /> Call:</span>
          <p  className='font-color'>+1 5589 55488 55s</p>
          <img src={customer} alt=""  style={{width: "100%",borderRadius: "80%"}} />
        </div>
        <div className="col-md-8">
        <div className="card">
              <div className="card-header">
              </div>
              <div className="card-body">
                  <form  style={{color:"#fff"}}>
                      <div className="">
                          <div className="form-group">
                              <label htmlFor="" className="form-label">Name</label>
                              <input type="text" className="form-control" id="" placeholder="Enter Name"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="" className="form-label">Email</label>
                              <input type="password" className="form-control" id="" placeholder="Email"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="" className="form-label">Subject</label>
                              <input type="text" className="form-control" id="" placeholder="Subject"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="" className="form-label">Message</label>
                              <textarea name="" id="" className="form-control" rows="5" placeholder="Message"></textarea>
                          </div>
                      </div>
                      <div className='text-center'>
                      <button type='submit' className="btn btn-outline-secondary btn-sm my-5 mx-5">Send</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
