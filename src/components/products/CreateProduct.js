import React, { Component } from "react"
import { connect } from "react-redux"
import { Form } from 'semantic-ui-react'
import { createProduct } from '../actions/productActions'
import { checkUser } from '../actions/userActions'

class CreateProduct extends Component {

  state = {
    title: '',
    price: '',
    description: '',
    image_url: '',
    user_id: this.props.currentUser.id,
  }

  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event, product) => {
    event.preventDefault()
    this.props.handleRoute()
    this.props.createProduct(product)
    this.props.checkUser()
  }

  render() {
    return (
      <div className="createProductForm">
        <h2>Sell Plant</h2>
        <Form style={{width:"700px"}}onSubmit= { (event) => {this.handleSubmit(event, this.state)}}>
          <Form.Input
            required
            type="text"
            id="title"
            placeholder="Title"
            value={this.state.title} 
            onChange={this.handleChange}
          />
          <Form.TextArea
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
          <Form.Button circular className="formButtons" content='Submit'/>          
        </Form>
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
  return { 
    createProduct: (product) =>  { dispatch(createProduct(product)) }, 
    checkUser: () =>  { dispatch(checkUser()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)