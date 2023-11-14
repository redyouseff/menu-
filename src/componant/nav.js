import {Button, Container, Form, Nav, NavDropdown, Navbar, Row} from"react-bootstrap"
import "./app.css"
import { useState } from "react"
const NavBar=({filterBySearch})=>{
    const[v,setv]=useState("");
    const doClick =()=>{
        filterBySearch(v);
       


    }
    return(
        <Row >
        <Navbar bg="dark" variant="dark" expand="lg" className=" nav">
        <Container  >
          <Navbar.Brand href="#">مطعم الاكل </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
             
            
           
              
              
            
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="ابحث"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{setv(e.target.value)}}
              />
              <Button onClick={()=>{doClick()}} variant="outline-success">بحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Row>

    )
}
export default NavBar