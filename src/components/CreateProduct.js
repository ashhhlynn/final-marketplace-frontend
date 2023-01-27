import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { createProduct } from './actions/productActions'


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

handleSubmit = (event, product)  => {
   event.preventDefault()
  this.props.createProduct(product)
  }

  render() {
    return (
        <Form onSubmit={ (e) => { this.handleSubmit(e, this.state)}}>
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
        
          <center><Form.Button content='Submit' /></center>
        </Form>
    );
  }
}

const MSTP = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (product) =>  { dispatch(createProduct(product)) }
}}


export default connect(MSTP, mapDispatchToProps)(CreateProduct)