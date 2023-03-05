import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { editProduct } from '../actions/productActions'
import { Divider, Header} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';


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
      <div>
     
     <Header as="h2"><i>Edit Product</i></Header>
        <Divider></Divider>
        
          <Form onSubmit={ (event) => { this.handleSubmit(event, this.state)}}>
            <Form.Input
              required
              label="Title"
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
              label="Description"
              placeholder="Description"
              value={this.state.description} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              label="Price"
              id="price"
              placeholder="Price"
              value={this.state.price} 
              onChange={this.handleChange}
            />
            <Form.Input
              required
              type="text"
              label="Image URL"
              id="image_url"
              placeholder="Image Url"
              value={this.state.image_url} 
              onChange={this.handleChange}
            />
            <center>
            <Form.Button size='medium' content='Submit' />
            </center>
        </Form>
  
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    editProduct: (product) =>  { dispatch(editProduct(product)) } ,
    checkUser: () =>  { dispatch(checkUser()) },
  }
}

export default connect(null, mapDispatchToProps)(EditProduct)