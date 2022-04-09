import React from 'react'
import "antd/dist/antd.css";
import {Card} from 'antd';

export default function WhyChoose() {

const { Meta } = Card;

  return (
    <div>
      <div className='container mt-5 font-color' id='whychoose'><hr />
          <h1 className='font-color'>Why Choose Our Restaurant</h1>
           <div className="row">
               <div className="col-md-4">
               <Card
                    hoverable
                >
                    <Meta className='font-color' title="What is Lorem Ipsum?" description=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
                </Card>
               </div>
               <div className="col-md-4">
               <Card
                    hoverable
                >
                    <Meta className='font-color' title="Why do we use it?" description="It is a long established fact that Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  a reader will be distracted by the readable content of a page when look" />
                </Card>
               </div>
               <div className="col-md-4">
               <Card
                    hoverable
                >
                    <Meta className='font-color' title="Where does it come from?" description="Contrary to popular belief, Lorem Ipsum is not simply random text  random text. It has roots Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  in a piece of classical" />
                </Card>
               </div>
           </div>
       </div>
    </div>
  )
}
