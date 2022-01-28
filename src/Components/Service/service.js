import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Col ,Container, Row , Card, Button} from 'react-bootstrap';
import image from "../../assets/images/1234.jpg"

function service() {

    return ( 
    <div>
        <div >
        <Container>
            <Row md={0} >
                <Col className='visibility: visible; animation-name: fadeInUp;'>
                <div className="heading-part align-center">
                    <h2 className="main_title heading mb-15">Үйлчилгээ</h2>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                <Card >
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
               </Col>
               <Col md={4}>
                <Card >
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
               </Col>
               <Col md={4}>
                <Card >
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
               </Col>

            </Row>

        </Container>
        </div>
    </div>

     );
}

export default service;