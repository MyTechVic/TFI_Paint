import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Route, Switch, Router } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
    <div>

      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword"  placeholder="password placeholder" />
        </FormGroup>
        <Link to="/"><Button>Submit</Button></Link>
      </Form>
      </div>
    );
  }
}

export default Login;


