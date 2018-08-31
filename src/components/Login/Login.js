import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, Container, Navbar, NavbarBrand,  } from 'reactstrap';
import logo from './tfiLoog.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import './Login.css';




class Login extends React.Component {
  constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }


  render() {
    const {errors} = this.state;
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
          <Form onSubmit={ this.handleSubmit } className='Login_Form'>
            <FormGroup>
              <Label for="Username">Email</Label>
              <Input 
              type="email" 
              name="email" 
              id="exampleEmail" 
              placeholder="Enter email address"
              onChange={this.handleInputChange}
              value={this.state.email}
              className={ {'is-invalid': errors.email }} />
              {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input 
              type="password" 
              autoComplete="password"  
              name="password" 
              id="examplePassword"  
              placeholder="Enter password"
              onChange={this.handleInputChange}
              value={this.state.password}
              className={ {'is-invalid': errors.password }} /> 
               {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </FormGroup>
            <Button outline color="primary">Login</Button>
          </Form>
        </Card>
      </div>
     </Container>
 </div>    
    );
  }
}

Login.propTypes = {
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)


