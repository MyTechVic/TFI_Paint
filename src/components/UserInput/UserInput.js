import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';
import './UserInput.css'
import axios from 'axios';


class UserInput extends React.Component {
 	constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetName = this.resetName.bind(this);

    this.state = {
      companyName: '',
      curtainCodes: '',
      sinageCodes: '',
      Notes: '',
      Method: '',
    };
  }

	onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.name]: e.target.value });
      }


 	resetName = (event) => {
           	this.setState({
                companyName:   '',
                curtainCodes:   '',
                sinageCodes:   '',
                Notes:  '',
                Method:   ''
              });
        }

    

onSubmit(e){
	e.preventDefault();
	// get our form data out of state
	const tfiInfo = { 
		companyName: this.state.companyName,
		curtainCodes: this.state.curtainCodes,
		sinageCodes: this.state.sinageCodes,
		Notes: this.state.Notes,
		Method: this.state.Method
	 }

	console.log('TFI INFORMATION', tfiInfo)
	console.log('STATE', this.state);
	axios.post(' http://localhost:3001/saveInfo/add', tfiInfo )
	     .then(res => console.log('RESULTS', res.data));
       
      

	      }
	render() {
		return(
		 <Container>	
			 <Form>
			 	<Row>
			 	 <Col md={{ size: 8}}>
			        <FormGroup >
			        	<Col sm={{size: 6}} >
			         		<Input value={this.state.companyName}  type="text" name="text"  placeholder="Company Name" disabled/>
			         	</Col>
		         		<Col sm={{size: 6}}>
			          		<Input value={this.state.companyName} onChange={this.onChange} type="text" name="companyName"  placeholder="Company Name" />
			          	</Col>
			        </FormGroup>
		        </Col>
		        </Row>
			 </Form>
			 	<Row>
			 		<Col md={{size: 9, offset: 6}} sm={{size: 10, offset:6}}>
				 		<div className="NewJobButton">
		    				<Button className='New_button' outline color="info" onClick={this.resetName}>New Job</Button>{' '}
				 		</div>
			 		</Col>
			 	</Row>
	 		<Form onSubmit={this.onSubmit}>
				 <Row>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Curtain Codes</Label>
				          <Input onChange={this.onChange} value={this.state.curtainCodes}  style={{ height: '200px' }} type="textarea" name="curtainCodes"  />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Sinage Codes</Label>
				          <Input onChange={this.onChange} value={this.state.sinageCodes} style={{ height: '200px' }} type="textarea" name="sinageCodes"  />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Notes</Label>
				          <Input onChange={this.onChange} value={this.state.Notes} style={{ height: '200px' }} type="textarea" name="Notes"  />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Method</Label>
				          <Input onChange={this.onChange} value={this.state.Method} style={{ height: '200px' }} type="textarea" name="Method"  />
				        </FormGroup>
			        </Col>
		        </Row>    
		
			<Row>
				<Col md={{size: 10, offset: 6}} sm={{size: 10, offset:6}}>
					<div>
				 		<Button className='submit_button' value='submit' outline color="success">Save Job</Button>{' '}
				 	</div>
			 	</Col>
		 	</Row>
		 		</Form>
	 </Container>
		    );
		  }
		}
export default UserInput