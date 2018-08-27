import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col,  FormFeedback, FormText,  } from 'reactstrap';
import { FormErrors } from '../FormErrors/FormErrors';
import './UserInput.css'
import axios from 'axios';


class UserInput extends React.Component {
 	constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetName = this.resetName.bind(this);

    this.state = {
      customerID: '',
      companyName: '',
      curtainCodes: '',
      sinageCodes: '',
      Notes: '',
      Method: '',
      formErrors: {customerID: ''},
      customerIDVaild: false,
	  formValid: false
    };  
}

  // create an error alert function to show duplication of new job. 

	onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
        				() => { this.validateField(name, value) });
      }

    validateField(fieldName, value) {
	    let fieldValidationErrors = this.state.formErrors;
	    let customerIDVaild = this.state.customerIDVaild;

	    switch(fieldName) {
	      case 'customerID':
	        customerIDVaild = value.length >=1;
	        fieldValidationErrors.customerID = customerIDVaild ? '' : ' requires more than 1 character';
	        break;
	      default:
	        break;
	    }
    this.setState({formErrors: fieldValidationErrors,
                    customerIDVaild: customerIDVaild,
                  }, this.validateForm);
  	}

	validateForm() {
    	this.setState({formValid: this.state.customerID});
  	}

  	errorClass(error) {
    	return(error.length === 0 ? '' : 'has-error');
  	}


 	resetName = (event) => {
           	this.setState({
                customerID:   '',
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
		customerID: this.state.customerID,
		companyName: this.state.companyName,
		curtainCodes: this.state.curtainCodes,
		sinageCodes: this.state.sinageCodes,
		Notes: this.state.Notes,
		Method: this.state.Method
	 }

	console.log('TFI INFORMATION', tfiInfo)
	console.log('STATE', this.state);
	axios.post(' http://localhost:3001/saveInfo/add', tfiInfo )
	     .then(res => console.log('RESULTS', res.data)
	     	
	     )}
	     
	render() {
		return(
		 <Container>

			 <Form>
			 	<Row>
				 	 <Col  sm="4">
				        <FormGroup >
			          		<Input value={this.state.companyName} onChange={this.onChange} type="text" name="companyName"  placeholder="Company Name" />
		          	  	</FormGroup>
		          	  		</Col>
		          	  	<FormGroup >
		          			<Col  sm="8">
				          		<Input invalid value={this.state.customerID} required  onChange={this.onChange} type="text" name="customerID"  placeholder="Customer ID" />
				          		<FormErrors formErrors={this.state.formErrors} />	
			      		 	</Col>
	      		 		</FormGroup>
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
				 		<Button className='submit_button' value='submit'  outline color="success">Save Job</Button>{' '}
				 	</div>
			 	</Col>
		 	</Row>
		 		</Form>
	 </Container>
		    );
		  }
		}
export default UserInput