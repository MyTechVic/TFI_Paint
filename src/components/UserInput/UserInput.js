import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import './UserInput.css'
import axios from 'axios';


class UserInput extends React.Component {
 	constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      curtainCodes: '',
      sinageCodes: '',
      Notes: '',
      Method: ''
    };
  }
 onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { companyName, curtainCodes, sinageCodes, Notes, Method  } = this.state;
        console.log(this.state);
        axios.post(' http://10.1.1.221:3001/saveInfo', {   companyName, curtainCodes, sinageCodes, Notes, Method  })
          .then((result) => {
          	console.log([e.target.name]: e.target.value );
      	 	console.log(result);
    		console.log(result.data);
            //access the results here....
          });
      }
	render() {
		return(
		 <Container>	
			 <Form>
			 	<Row>
			 	 <Col md={{ size: 8}}>
			        <FormGroup >
			        	<Col sm={{size: 6}} >
			         		<Input  type="text" name="text" id="exampleText" placeholder="Company Name" disabled/>
			         	</Col>
		         		<Col sm={{size: 6}}>
			          		<Input onChange={this.onChange} type="text" name="companyName" id="exampleText" placeholder="Company Name" />
			          	</Col>
			        </FormGroup>
		        </Col>
		        </Row>
			 </Form>
			 	<Row>
			 		<Col md={{size: 9, offset: 6}} sm={{size: 10, offset:6}}>
				 		<div className="NewJobButton">
				 			<Button outline color="danger">Delete Job</Button>{' '}
		    				<Button outline color="info">New Job</Button>{' '}
				 		</div>
			 		</Col>
			 	</Row>
	 		<Form onSubmit={this.onSubmit}>
				 <Row>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Curtain Codes</Label>
				          <Input onChange={this.onChange}  style={{ height: '200px' }} type="textarea" name="curtainCodes" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Sinage Codes</Label>
				          <Input onChange={this.onChange} style={{ height: '200px' }} type="textarea" name="sinageCodes" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Notes</Label>
				          <Input onChange={this.onChange} style={{ height: '200px' }} type="textarea" name="Notes" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Method</Label>
				          <Input onChange={this.onChange} style={{ height: '200px' }} type="textarea" name="Method" id="exampleText" />
				        </FormGroup>
			        </Col>
		        </Row>    
		
			<Row>
				<Col md={{size: 10, offset: 6}} sm={{size: 10, offset:6}}>
					<div>
				 		<Button value='submit' outline color="success">Save Job</Button>{' '}
				 	</div>
			 	</Col>
		 	</Row>
		 		</Form>
	 </Container>
		    );
		  }
		}
export default UserInput