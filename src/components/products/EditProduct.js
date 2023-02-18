import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { editProduct } from '../actions/productActions'
import { Segment, Divider, Header } from 'semantic-ui-react'
import Navbar from '../Navbar'

class EditProduct extends Component {

constructor(props){
super(props)
  this.state = {
    title: '',
    price: '',
    description: '',
    image_url: '',
    id: 32
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
  }

  render() {
    return (
      <div>
       
        <Navbar />
      <center>
        <Segment position="center" style={{ width:"640px", positionAlign:"center"}}>
     
        <center>
            <Header as="h2"><i>Edit Product</i></Header>
          </center>
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

const mapDispatchToProps = (dispatch) => {
  return { editProduct: (product) =>  { dispatch(editProduct(product)) } }
}

export default connect(null, mapDispatchToProps)(EditProduct)