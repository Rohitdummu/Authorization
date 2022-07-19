import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav(){
return(
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="nav logo"
              src="https://static.vecteezy.com/system/resources/previews/004/261/133/original/phone-mobile-icon-flat-style-isolated-on-white-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-free-vector.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Contact Manager
          </Navbar.Brand>
        </Container>
    </Navbar>
    </div>
)
}
export default Nav;