import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { editProduct } from '../actions/productActions'
import { Segment, Divider, Header, Button } from 'semantic-ui-react'
import {deleteProduct} from '../actions/productActions'

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

handleDelete = (event, id) => {
  event.preventDefault()
  this.props.deleteProduct(id)
}

  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event, product) => {
    event.preventDefault()
    this.props.editProduct(product)
  }

  render() {
    return (
      <div>
      <center>
        <Segment position="center" style={{ width:"640px", positionAlign:"center"}}>
          <Header as="h2"><i>Edit Product</i></Header>
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
            <Form.Button size='big' content='EDIT PRODUCT' />
            <Button size="big" content="REMOVE" onClick= { (event) => { this.handleDelete(event, this.state.id)}}></Button>
            </center>
        </Form>
      </Segment>
      </center>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    editProduct: (product) =>  { dispatch(editProduct(product)) } ,
    deleteProduct: (product) =>  { dispatch(deleteProduct(product)) } 
  }
}

export default connect(null, mapDispatchToProps)(EditProduct)