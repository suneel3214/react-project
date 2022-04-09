import React from 'react'
import {useEffect,useState} from 'react'
import top from '../component/images/top.png'

 function TopButton() {

    const[topbutton, setTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY > 10) {
                setTopButton(true)
            } else{
                setTopButton(false)
            }
        })
    },[])

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior:  "smooth"
        })
    }
  return (
    <div className='App'>
      {topbutton && (
          <button className="btn btn-outline-secondary btn-sm my-2 mx-2" style={{
              position: "fixed",
              bottom : "50px",
              right: "5px",
              height: "50px",
              width: "50px",
              fontSize: "50px",
              lineHeight: 0,
            }} onClick={scrollUp}><img src={top} width="40" height="40" alt="" style={{marginLeft: "-4px"}} /></button>
      )}
    </div>
  )
}
export default TopButton;