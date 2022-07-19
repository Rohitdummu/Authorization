import {useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function App() {
  const navigate = useNavigate()
  const [Name,setName] = useState("")
  const [pwd,setpwd] = useState("")
  const [msg,setmsg] = useState("")
  const [flg,setflg] = useState(false)
  const handlechange = (e)=>{
    e.preventDefault()
    if(e.target.name==="uName"){
      setName(e.target.value)
    }
    if(e.target.name==="uPasswd"){
      setpwd(e.target.value)
    }
  }
  const redirect = async (e)=>{
    e.preventDefault()
    if(Name && pwd){
      try{
        const resp = await axios.post("http://localhost:3007/getin",{"email":Name,"password":pwd})
        console.log(resp.data)
        setflg(resp.data.status)
        setmsg(resp.data.msg)
        if(resp.data.status){
          localStorage.setItem("token",resp.data.token)
        }
      }
      catch(err){
        console.log(err)
      }
    }
    else{
      setmsg("Enter mail and password")
    }
  }
  const handlenavigate=()=>{
    navigate(`/main/${Name}`)
  }
  return (
    <div>
    <Container className="block-example border border-primary my-5 rounded mb-0">
    <Row className="my-3">
      <Col md={{ span: 4, offset: 3 }}>
      <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="uName" onChange={(e)=>handlechange(e)} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="uPasswd" onChange={(e)=>handlechange(e)} placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" /> style={{ display: "flex", justifyContent: "center" }}
            </Form.Group> */}
            <div clasName="Form" style={{ display: "flex", justifyContent: "center" }}>
                <Button className="mb-3" variant="primary" type="submit" onClick={(e)=>redirect(e)}>
                  Submit
                </Button>
            </div>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label Row>
                  New User!
                </Form.Label>
                <Col sm={8}>
                  <Button variant="primary" onClick={(e)=>navigate("/main")}>Create Account</Button>
                </Col>
            </Form.Group>
      </Form>
      {
        flg?handlenavigate():
      <Alert key={'danger'} className="mt-3" variant ={'danger'}>
          {msg}
      </Alert>
      }
      </Col>
    </Row>
    </Container>
    <Container >
        <Row>
              <footer className="blockquote-footer">
                      Designed and Developed By <cite title="Source Title">DUMMU ROHIT</cite>
              </footer>
        </Row>
    </Container>
    </div>
  );
}

export default App;
