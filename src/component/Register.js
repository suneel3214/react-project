import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
export  function Register(props) {


    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const history = useHistory(); 

    async function signUp(event){
        event.preventDefault()
        let item = {name,password,email}
        // console.log(item);

      let result = await  axios.post("http://127.0.0.1:8000/api/register",item).then((res)=>{
          return res.data
          
      })
        // console.warn("result" , result)
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/")
        props.showAlert("Data inserted successfully","success");

    }

  return (
    <div className="container" id='register'><hr />
        <h1 className='font-color'>Apply for Registration in my Website</h1>
      {/* <!-- End Row--> */}
        <div className="row">
            <div className="col-md-6 mt-5">
                <h2 className='font-color font'>Why do we use it?</h2>
                <h6 className='font-color font'>It is a long established fact that a reader will be distracted by
                     the readable content of a page when looking at its layout. The point 
                     of using Lorem Ipsum is that it has a more-or-less normal distribution
                      of letters, as opposed to using 'Content here, content here', making 
                      it look like readable English. Many desktop publishing packages and 
                      web page editors now use Lorem Ipsum as their default model text, and
                       a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                     Various versions have evolved over the years, sometimes by accident,
                      sometimes on purpose (injected humour and the like
                        It is a long established fact that a reader will be distracted by
                     the readable content of a page when looking at its layout. The point 
                     of using Lorem Ipsum is that it has a more-or-less normal distribution
                      of letters, as opposed to using 'Content here, content here', making 
                      it look like readable English. Many desktop publishing packages and 
                      web page editors now use Lorem Ipsum as their</h6>
            </div>
            <div className="col-md-6 mt-5">
                <h1 className='text-center font-color font'>Sign Up</h1>
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <form onSubmit={((event)=>signUp(event))} style={{color:"#fff"}}>
                            <div className="">
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text"  value={name} onChange={(e) =>setName(e.target.value)} className="form-control" id="" placeholder="Enter Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password"  value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text"  value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control" id="" placeholder="Email"/>
                                </div>
                            </div>
                            <div className='text-center'>
                            <button type='submit' className="btn btn-outline-secondary btn-sm my-5 mx-5">Create User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         {/* End Row  */}
    </div>
  )
}

export default Register

