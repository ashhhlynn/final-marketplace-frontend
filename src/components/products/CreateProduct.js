import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { createProduct } from '../actions/productActions'
import { Segment, Divider, Header } from 'semantic-ui-react'
import Navbar from '../Navbar'

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
    this.props.createProduct(product, this.props.currentUser)
  }

  render() {
    return (
      <div>
        <Navbar />
        <center>
        <Segment position="center" style={{ width:"640px", positionAlign:"center"}}>
          <Header as="h2"><i>Create Product</i></Header>
          <Divider></Divider>
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
            <Form.Button size='big' content='SUBMIT' />
            </center>
        </Form>
      </Segment>
      </center>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return { createProduct: (product, user) =>  { dispatch(createProduct(product, user)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)