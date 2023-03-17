import React, { Component } from "react"
import { connect } from "react-redux"
import { Form } from 'semantic-ui-react'
import { editProduct } from '../actions/productActions'
import { Divider } from 'semantic-ui-react'
import { checkUser } from '../actions/userActions'

class EditProduct extends Component {

constructor(props){
super(props)
  this.state = {
    title: this.props.product.title,
    price: this.props.product.price,
    description: this.props.product.description,
    image_url: this.props.product.image_url,
    id: this.props.product.id
  }
}

  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event, product) => {
    event.preventDefault()
    this.props.editProduct(product)
    this.props.checkUser()
    this.props.handleClose();
  }

  render() {
    return (
      <div className="editProduct"><h2>Edit Product</h2><Divider></Divider>
        <Form onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
            <Form.Input
              required
              label="Title"
              type="text"
              id="title"
              value={this.state.title} 
              onChange={this.handleChange}
            />
            <Form.TextArea
              required
              type="textarea"
              id="description"
              label="Description"
              value={this.state.description} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              label="Price"
              id="price"
              value={this.state.price} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              label="Image URL"
              id="image_url"
              value={this.state.image_url} 
              onChange={this.handleChange}
            />
          <Form.Button className="formButton" content='Submit'/>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    editProduct: (product) =>  { dispatch(editProduct(product)) } ,
    checkUser: () =>  { dispatch(checkUser()) }
  }
}

export default connect(null, mapDispatchToProps)(EditProduct)