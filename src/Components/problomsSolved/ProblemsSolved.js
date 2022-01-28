import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Col ,Container, Row} from 'react-bootstrap';
import { Player } from 'video-react';
function ProblemsSolved(props) 
{

    
    return ( 
       <Container>
          <Row md={0} >
                <Col className='visibility: visible; animation-name: fadeInUp;'>
                <div className="heading-part align-center">
                    <h2 className="main_title heading mb-15">{props.data.titleProblem}</h2>
                </div>
                </Col>
            </Row>
     {props.change? 
     <Row >
     <Col lg="6 " >
     <video autoplay="" muted="" loop="" id="myVideo" height="280" width="500">
          <source src={props.data.video} type="video/mp4"/>
          </video>
          
     </Col>
     <Col lg="6" className="d-flex align-items-center justify-content-center">
          <div >
          <h1 >{props.data.title}</h1>
          <p>{props.data.text}</p>
          </div>
   </Col>
</Row>
     : 
     <Row >
          <Col lg="6 " className="d-flex align-items-center justify-content-center">
          <div >
               <h1 >{props.data.title}</h1>
               <p>{props.data.text}</p>
          </div>
        
          </Col>
          <Col lg="6">
               <video autoplay="" muted="" loop="" id="myVideo" height="280" width="500">
               <source src={props.data.video} type="video/mp4"/>
               </video>
          </Col>
    </Row>
    }
       </Container>

     );
}

export default ProblemsSolved;

