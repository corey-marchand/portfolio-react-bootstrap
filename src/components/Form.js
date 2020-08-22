import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';


const ContactForm = () => (
    <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control as="textarea" rows="1" placeholder="Full Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Company</Form.Label>
            <Form.Control as="textarea" rows="1" placeholder="Company" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control placeholder="Message" as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
);

export default ContactForm;
