import React from 'react';
import {  Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import './Search.css'

class Search extends React.Component {
  token = null;	
  state = {
    query: "",
    people: []
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({
      query: value
    });

    this.search(value);

  };



  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ people: data.results });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }


	render() {

		return(
			<Container>
				 <Form>
				 	<Row>
				 		<Col md={{ size: 6 ,offset: 3}}>
					        <FormGroup className="SearchBar">
					          <Input onChange={this.onChange.bind(this)} type="search" name="search" id="exampleSearch" placeholder="search" />
							</FormGroup>
						</Col>
					</Row>
		  		</Form>
	  		</Container>
	    );
	  }
	}
export default Search