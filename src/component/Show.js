import React , {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import "antd/dist/antd.css";
import { Modal, Button,Carousel,Card  } from 'antd';
import slider1 from '../component/images/slider1.jpg';
import about from '../component/images/about.jpg';
import slider3 from '../component/images/slider3.jpg';
import slider4 from '../component/images/slider4.png';
import card from '../component/images/card.webp';

let image = ("https://www.business2community.com/wp-content/uploads/2019/04/Digital-Marketing-900x434.jpg");


export  function Show(props) {
    const [userList, setUserList] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    useEffect(()=>{
        showUser()
    },[])
    
function showUser(id){
    axios.get('http://127.0.0.1:8000/api/show').then((response)=>{
        // console.log(response);
        setUserList(response.data)
    })
}
  
function deleteUser(id){
    axios.post(`http://127.0.0.1:8000/api/student/${id}`).then((response)=>{
        showUser()
        return response;
    })
    props.showAlert("Data Deleted successfully","success");
}

function getUser(id){
    axios.get(`http://127.0.0.1:8000/api/profile/${id}`).then((response)=>{
        setUserDetails(response.data)
        setIsModalVisible(true)
    })
}
const { Meta } = Card;
const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    height: "400px",
  };

  

// console.log('userDetails',userDetails)
  return (
      
    <div>
        <div className='container-fluid card2' id='show'>
            <Carousel className='mt-5' autoplay>
                <div>
                <img src={about} width="100%" alt="" style={contentStyle} />
                </div>
                <div>
                <img src={slider1} width="100%" alt="" style={contentStyle} />
                </div>
                <div>
                <img src={slider3} width="100%" alt="" style={contentStyle} />
                </div>
                <div>
                <img src={slider4} width="100%" alt="" style={contentStyle} />
                </div>
            </Carousel>
        </div>
        <div className='container card'>
            <div className='row'>
                <div className="col-md-6 img-shadow">
                <h1 className="text-center font-color font">Our Restaurant</h1><hr/>
                <img src={image} width="100%"  height="70%" alt="image not found" />
                </div>
                <div className='col-md-6 table-shadow'>
                <h1 className="text-center font-color font">Restaurant Teams Member's</h1><hr/>
                        <table className="table font-color">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {userList.map(( value , i) => 
                            
                                <tr key={i}>
                                    <th scope="row">{value.id}</th>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>
                                        <button type="secondary"  className="btn btn-outline-secondary btn-sm my-2 mx-2" onClick={() => {getUser(value.id) }}>View</button>
                                        <Link className="btn btn-outline-secondary btn-sm my-2 mx-2" to={`/edit/${value.id}`} >Edit</Link>
                                        <button onClick={()=>deleteUser(value.id)} className="btn btn-outline-secondary btn-sm my-2 mx-2" >Delete</button>
                                    </td>
                                </tr>
                            )
                            }
                            </tbody>
                        </table>
                </div>
            </div>
            {/* <div style={{ display: 'block', width: 700, padding: 30}}></div> */}
                <Modal className='font' title="Profile"
                    visible={isModalVisible}
                    onOk={() => {
                        setIsModalVisible(false);
                    }}
                    onCancel={() => {
                        setIsModalVisible(false);
                    }}>
                    <p>Name: {userDetails?.name}</p>           
                    <p>Email: {userDetails?.email}</p>
                    </Modal>
                    
       </div>
       <div className='container mt-5'>
           <div className='row'>
           <div className="col-md-7">
               <h3 className='font font-color'>Where does it come from?</h3>
               <p className='font-color'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                   industry. Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem 
                    Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.It is a long established fact that a 
                    reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                        have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour and the like).</p>
               </div>
               <div className="col-md-5">
               <img src={card} className="card_img" width="100%" alt="" height="400" />
               </div>
           </div>
       </div><hr />
       <div className='container mt-5'>
           <div className="row">
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg" />}
                >
                    <Meta title="What is Lorem Ipsum?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
                </Card>
               </div>
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2019/12/15/13/58/christmas-4697165_960_720.jpg" />}
                >
                    <Meta title="Why do we use it?" description="It is a long established fact that a reader will be distracted by the readable content of a page when look" />
                </Card>
               </div>
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2020/11/28/11/03/christmas-5784271_960_720.jpg" />}
                >
                    <Meta title="Where does it come from?" description="Contrary to popular belief, Lorem Ipsum is not simply random text  random text. It has roots in a piece of classical" />
                </Card>
               </div>
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src="https://cdn.pixabay.com/photo/2019/12/22/04/18/christmas-4711785_960_720.jpg" />}
                >
                    <Meta title="Where can I get some?" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration" />
                </Card>
               </div>
           </div>
       </div>
                
    </div>

    
    
  )
}

export default Show

