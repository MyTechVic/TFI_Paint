import React from 'react';
import {  Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import './Search.css'
import axios from 'axios'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
          searchInfo: []
    };  
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log('Value', value)
    this.setState({
      query: value
    });

    this.search(value);

  };

  search = query => {
      axios.get('http://localhost:3001/getData')
       .then(res =>{
        const searchInfo = (res.data || []).map(obj => ({ 
          company: obj.companyName,
          sinage: obj.sinageCodes,
          method: obj.Method,
          notes: obj.Notes}));


          this.setState({ searchInfo });
       })
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
					          <Input onChange={this.handleInputChange} type="search" name="search" id="exampleSearch" placeholder="search" />
							</FormGroup>
						</Col>
					</Row>

		  		</Form>
       <ul>
        {this.state.searchInfo.map(function(searchInfo, index){
          return (
              <div key={index}>
                <h1>NAME: {searchInfo.company}</h1>
                <p>{searchInfo.sinage}</p>
                <p>{searchInfo.method}</p>
                <p>{searchInfo.notes}</p>
              </div>
            )
          }
        )}
      </ul>
	  		</Container>
	    );
	  }
	}
export default Search