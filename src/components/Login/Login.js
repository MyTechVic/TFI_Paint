import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, Container, Navbar, NavbarBrand,  } from 'reactstrap';
import logo from './tfiLoog.png'
import { Link } from 'react-router-dom';
import './Login.css';




class Login extends React.Component {
  render() {
    return (
<div>
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/"> <img src={logo} alt="Logo" /> </NavbarBrand>
    </Navbar>
  </div>   
   <Container className='Login_container'>    
    <div>
       <Card className='Login_Card'>
          <Form className='Login_Form'>
            <FormGroup>
              <Label for="Username">Username</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter Username" />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" autoComplete="password"  name="password" id="examplePassword"  placeholder="Enter password" />
            </FormGroup>
            <Link to="/Dashboard"><Button outline color="primary">Login</Button></Link>
          </Form>
        </Card>
      </div>
     </Container>
 </div>    
    );
  }
}

export default Login;


