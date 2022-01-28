import React from 'react';
import logo from '../../assets/images/logo1.png'
import styles from './Navbar.module.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container } from 'react-bootstrap';

const CNavbar = ()=> {
  return (
    <div >
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
  <Container>
  <Navbar.Brand href="#home">
  <img  src={logo}  alt="fireSpot"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-center flex-grow-1 pe-3">
       <Nav.Link href="#features"><h5 className={styles.navLink} id={styles.navActive}>Үйлчилгээ</h5> </Nav.Link>
      <Nav.Link href="#pricing"><h5 className={styles.navLink}>Бидний тухай</h5></Nav.Link>
    </Nav>
    <Nav className="justify-content-end flex-grow-5 pe-3">
    <button className={styles.bgButton}>EN</button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
   
  );
}

export default CNavbar;