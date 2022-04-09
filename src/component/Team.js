import React from 'react'
import "antd/dist/antd.css";
import { Card  } from 'antd';
import t from '../component/images/t.jpg';
import t1 from '../component/images/t1.jpg';
import t4 from '../component/images/t4.jpg';
import t3 from '../component/images/t3.jpg';

export default function Team() {
const { Meta } = Card;

  return (
    <div className='container mt-5' id='team'><hr />
        <h1 className='font-color'>Our Proffesional Chefs</h1>
       <div className="row">
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src={t} />}
                >
                    <Meta title="What is Lorem Ipsum?" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
                </Card>
               </div>
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src={t1} />}
                >
                    <Meta title="Why do we use it?" description="It is a long established fact that a reader will be distracted by the readable content of a page when look" />
                </Card>
               </div>
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src={t4} />}
                >
                    <Meta title="Where does it come from?" description="Contrary to popular belief, Lorem Ipsum is not simply random text  random text. It has roots in a piece of classical" />
                </Card>
               </div>
               <div className="col-md-3">
               <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" src={t3} />}
                >
                    <Meta title="Where can I get some?" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration" />
                </Card>
               </div>
           </div>
    </div>
  )
}
