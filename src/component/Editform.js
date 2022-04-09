import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'



const Editform = (props) => {

const [name,setName] = useState("");
const [password,setPassword] = useState("");
const [email,setEmail] = useState("");
const history = useHistory(); 


useEffect(()=>{
    getUser();
    // console.log()
},[])


//edit code

function getUser(id){
    axios.get(`http://127.0.0.1:8000/api/edit/${props.match.params.id}`).then((response)=>{
        // console.log(response);
        setName(response.data.name)
        setPassword(response.data.password)
        setEmail(response.data.email)

    })
}



//update code


async function upDate(event){
    event.preventDefault()
    let item = {name,password,email}
    // console.log(item);

  let result = await  axios.post(`http://127.0.0.1:8000/api/update/${props.match.params.id}`,item).then((res)=>{
      return res.data
      
  })
    // console.warn("result" , result)
    localStorage.setItem("user-info",JSON.stringify(result));
    history.push("/")
    props.showAlert("Data Update successfully","success");

}

  return (
    <div className="col-md-12">
      {/* <!-- End Row--> */}
        <div className="row">
            <h1 className='text-center font'>Edit Form</h1>
            <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12 offset-sm-3">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="card-body">
                        <form onSubmit={((event)=>upDate(event))}>
                            <div className="">
                                <div className="form-group">
                                    <label htmlFor=""  className="form-label">Name</label>
                                    <input type="text" defaultValue={name} onChange={(e) =>setName(e.target.value)} className="form-control" id="" placeholder="Enter Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" defaultValue={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" defaultValue={email} onChange={(e) =>setEmail(e.target.value)}  className="form-control" id="" placeholder="Email"/>
                                </div>
                            </div>
                            <div className='text-center'>
                            <button type='submit' className="btn btn-outline-secondary btn-sm my-5 mx-2">Update</button>
                            <Link className="btn btn-outline-secondary btn-sm my-2 mx-2" to="/">Back To Home</Link>
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
export default Editform;
