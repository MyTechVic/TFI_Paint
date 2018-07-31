import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col} from 'reactstrap';
import './UserInput.css'

class UserInput extends React.Component {
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
			          		<Input type="text" name="text" id="exampleText" placeholder="Company Name" />
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
				          <Input style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Sinage Codes</Label>
				          <Input style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Notes</Label>
				          <Input style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
				        </FormGroup>
			        </Col>
				 	 <Col md='6'>
				        <FormGroup className='FormGroupsTfi'>
				          <Label for="exampleText">Method</Label>
				          <Input style={{ height: '200px' }} type="textarea" name="text" id="exampleText" />
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