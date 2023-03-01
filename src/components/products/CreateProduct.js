import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { createProduct } from '../actions/productActions'
import { Segment, Divider, Header } from 'semantic-ui-react'
import {checkUser} from '../actions/userActions'
import Home from '../Home'


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
    this.props.checkUser()
  }

  render() {
    return (
      <div>
        <center>
        <img style={{objectFit: "cover", objectPosition: "0% 50%"}}src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=2400" alt="House Plants" srcset="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w" width="1260" height="300" loading="eager"/>
<br></br>
        <Segment position="center" style={{ width:"940px", marginTop:"2%", positionAlign:"center"}}>
          <center><Header as="h2"><i>Sell Plant</i></Header></center>
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
            <Form.Button size='medium' circular content='Submit' />
            </center>
        </Form>
      </Segment><br></br><br></br>
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
  return { 
    createProduct: (product, user) =>  { dispatch(createProduct(product, user)) }, 
    checkUser: () =>  { dispatch(checkUser()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)