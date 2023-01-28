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
}

handleChange = (event) => {
  this.setState ({
    [event.target.id]: event.target.value
  })
}

handleSubmit = (event, product) => {
  event.preventDefault()
  this.props.createProduct(product)
}

render() {
  return (
    <Form onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
        <Form.Input
          required
          type="text"
          id="title"
          placeholder="Title"
          value={this.state.title} 
          onChange={this.handleChange}
        />
        <Form.Input
          required
          type="text"
          id="description"
          placeholder="Description"
          value={this.state.description} 
          onChange={this.handleChange}
        />
        <Form.Input
          required
          type="text"
          id="price"
          placeholder="Price"
          value={this.state.price} 
          onChange={this.handleChange}
        />
        <Form.Input
          required
          type="text"
          id="image_url"
          placeholder="Image Url"
          value={this.state.image_url} 
          onChange={this.handleChange}
        />
        <center>
        <Form.Button content='Submit' />
        </center>
      </Form>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return { createProduct: (product) =>  { dispatch(createProduct(product)) } }
}

export default connect(null, mapDispatchToProps)(CreateProduct)