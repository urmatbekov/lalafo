import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class AddForm extends Component {

    state = {
        title: '',
        price: '',
        image: '',
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addProduct(this.state)
        this.setState({title: '', price: ''})
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeImage = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        })
    }


    render() {
        return (
            <div className="m-auto" style={{width: "600px"}}>
                <h2>Add Product</h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={this.state.title} onChange={this.onChange} type="text" name="title"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicImage">
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={this.onChangeImage} type="file" name="image"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={this.state.price} onChange={this.onChange} type="number" name="price"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br/>
                    <br/>
                </Form>
            </div>
        );
    }
}

export default AddForm;