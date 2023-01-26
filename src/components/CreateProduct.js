import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, TextArea } from 'semantic-ui-react'

class CreateProduct extends Component {
  state = {
    title: '',
    price: '',
    description: '',
    image_url: ''
  };

  handleChange = (e) => {
  this.setState({
      [e.target.id]: e.target.value
  })
}

handleSubmit = event => {
    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
        },
        body: JSON.stringify({
            title: this.state.title,
          
            description: this.state.description,
            price: this.state.price,
            image_url: this.state.image_url
        })
    })
    .then(response => response.json())
    .then(newProduct => {
        console.log(newProduct)
    })
}


  render() {
    return (
      <div>
        <Form onSubmit={ (e) => { this.props.createProduct(e, this.state)}}>
          <p>
          <Form.Input
          type="text"
          id="title"
          placeholder="title"
          value={this.state.title} 
          onChange={this.handleChange}
          />
           <Form.Input
          type="text"
          id="description"
          placeholder="description"
          value={this.state.description} 
          onChange={this.handleChange}
          />
           <Form.Input
          type="text"
          id="price"
          placeholder="price"
          value={this.state.price} 
          onChange={this.handleChange}
          />
        <Form.Input
          type="text"
          id="image_url"
          placeholder="image_url"
          value={this.state.image_url} 
          onChange={this.handleChange}
          />
</p>
          <center><Form.Button content='Submit' /></center>
        </Form>
      </div>
    );
  }
}



export default CreateProduct