import React from "react";
import ba2 from '../../assets/images/Banner/ba2.webp'
import banner2 from '../../assets/images/Banner/banner2.webp'
import banner4 from '../../assets/images/Banner/banner4.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row, Col } from 'react-bootstrap';
import styles from './Banner.module.css'
const Banner = ()=>{



    return(
        <Carousel variant="dark" className={styles.carousel} >
            <Carousel.Item interval={1000} color="black" className={styles.bannerBg}>
               <Row >
                   <Col lg="6 " className="d-flex align-items-center justify-content-center">
                   <div >
                        <h1 >Гарт багтах дижитал<br/> клиник</h1>
                   </div>
                   
                   </Col>
                   <Col lg="6">
                   <img
                    className="rounded float-start w-100 h-100 "
                    src={ba2}
                    alt="First slide"
                    />
                   </Col>
               </Row>
            </Carousel.Item>
            <Carousel.Item interval={1000} className={styles.bannerBg}>
            <Row>
                   <Col lg="6" className="d-flex align-items-center justify-content-center">
                   
                   <div>
                    <p>Таны гарт</p>
                    <h1 >Таны эрүүл мэнд</h1>
                   </div>
                   
                   </Col>
                   <Col lg="6">
                   <img
                    className="rounded float-start w-100 h-100 "
                    src={banner2}
                    alt="First slide"
                    />
                   </Col>
               </Row>
            </Carousel.Item>
            <Carousel.Item className={styles.bannerBg}>
            <Row>
                   <Col lg="6" className="d-flex align-items-center justify-content-center">
                   
                   <div>
                        <h1 > Google-ээс<br/> өвчнөө битгий хай </h1>
                   </div>
                   
                   </Col>
                   <Col lg="6">
                   <img
                    className="rounded float-start w-100 h-100 "
                    src={banner4}
                    alt="First slide"
                    />
                   </Col>
               </Row>
            </Carousel.Item>
        </Carousel>

    )
}
export default Banner;