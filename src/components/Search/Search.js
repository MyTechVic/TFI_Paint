import React from 'react';
import {  Form, FormGroup, Input, Container, Row, Col, Label } from 'reactstrap';
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
          console.log(data.results); 
          console.log(data);
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
							<FormGroup>
					          <Label   for="exampleText" > {this.state.people.map(person => (
						          <ul key={person.name}>
						            <li>{person.name}</li>
						          </ul>))}
					          </Label>
					        </FormGroup>
						</Col>
					</Row>
		  		</Form>
	  		</Container>
	    );
	  }
	}
export default Search