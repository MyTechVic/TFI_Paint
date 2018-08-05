import React from 'react';
import { Navbar, NavbarBrand, Nav, } from 'reactstrap';
import logo from './tfiLoog.png'

class Navigation extends React.Component {
  render() {
    return (
	      <div>
	        <Navbar color="light" light expand="md">
	          <NavbarBrand href="/"> <img src={logo} alt="Logo" /> </NavbarBrand>
	        </Navbar>
	      </div>
	    );
	  }
}
export default Navigation