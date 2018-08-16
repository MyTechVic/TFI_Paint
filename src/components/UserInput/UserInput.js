import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col} from 'reactstrap';
import './UserInput.css'

class UserInput extends React.Component {
 	constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.curtainhandleChange = this.curtainhandleChange.bind(this);
    this.sinagehandleChange = this.sinagehandleChange.bind(this);
    this.noteshandleChange = this.noteshandleChange.bind(this);
    this.methodhandleChange = this.methodhandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  	handleChange(event) {
    this.setState({value: event.target.value});
    console.log('company:', event.target.value);
  }

	curtainhandleChange(event) {
    this.setState({value: event.target.value});
    console.log('curtain:', event.target.value);
  }

  sinagehandleChange(event) {
    this.setState({value: event.target.value});
    console.log('sinage:', event.target.value);
  }

  noteshandleChange(event) {
    this.setState({value: event.target.value});
    console.log('notes:', event.target.value);
  }

  methodhandleChange(event) {
    this.setState({value: event.target.value});
    console.log('method:', event.target.value);
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
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
			          		<Input onChange={this.handleChange} type="text" name="text" id="exampleText" placeholder="Company Name" />
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
	 		<Form>
				 <Row>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Curtain Codes</Label>
				          <Input onChange={this.curtainhandleChange}  style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Sinage Codes</Label>
				          <Input onChange={this.sinagehandleChange} style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Notes</Label>
				          <Input onChange={this.noteshandleChange} style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Method</Label>
				          <Input onChange={this.methodhandleChange} style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
		        </Row>    
			</Form>
			<Row>
				<Col md={{size: 10, offset: 6}} sm={{size: 10, offset:6}}>
					<div>
				 		<Button outline color="success">Save Job</Button>{' '}
				 	</div>
			 	</Col>
		 	</Row>
	 </Container>
		    );
		  }
		}
export default UserInput