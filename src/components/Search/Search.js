import React from 'react';
import {  Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import './Search.css'

class Search extends React.Component {
	render() {
		return(
			<Container>
				 <Form>
				 	<Row>
				 		<Col md={{ size: 6 ,offset: 3}}>
					        <FormGroup className="SearchBar">
					          <Input type="search" name="search" id="exampleSearch" placeholder="search" />
							</FormGroup>
						</Col>
					</Row>
		  		</Form>
	  		</Container>
	    );
	  }
	}
export default Search