import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {useNavigate } from 'react-router-dom';

export default function Main() {
  const {email} = useParams()
  const navigate = useNavigate()
  const [resp,setresp] = useState({})
  useEffect(async ()=>{
    try{
      const result = await axios.get(`http://localhost:3007/getcontactdetails/${email}`)
      setresp(result.data)
      console.log(resp)
    }
    catch(err){
      console.log(err)
    }
  },[])
  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/updatepassword")
}
const handlehome =(e)=>{
  e.preventDefault()
  navigate("/")
}
  return (
    <div>
      <Container>
        <Row className="my-3">
        <Col>
        <Card style={{ width: '18rem'}}>
        <Card.Header>Your Contact Card</Card.Header>
      <Card.Body>
        <Card.Title>{resp.fname}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{resp.email}</Card.Subtitle>
        <Card.Text>
        {resp.address}
        </Card.Text>
        <Card.Text>
        {resp.phone}
        </Card.Text>
        <Card.Body>
        <Button onClick={(e)=>handleSubmit(e)}>Update</Button>
        <Button className="mx-3" onClick={(e)=>handlehome(e)}>Home</Button>
        </Card.Body>
      </Card.Body>
    </Card>
        </Col>
        </Row>
      </Container>
    </div>
  )
}
