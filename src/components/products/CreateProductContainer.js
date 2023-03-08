import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'semantic-ui-react'
import { createProduct } from '../actions/productActions'
import { Segment } from 'semantic-ui-react'
import {checkUser} from '../actions/userActions'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


function CreateProductContainer () {

 
  handleSubmit = (event, product) => {
    event.preventDefault()
    this.props.createProduct(product)
    this.props.checkUser()
  }

 return(

      <div>
        <img style={{objectFit: "cover", objectPosition: "50% 12%"}}src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=2400" alt="House Plants" srcset="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w" width="1263" height="270" loading="eager"/>          
        <h1 style={{marginTop: "2%", marginLeft:"29%"}}>sell plant</h1>
        <img style={{marginTop: "-3%", marginLeft:"65%", objectFit: "cover", objectPosition: "0% 0%"}}width="370" height="370" src="https://hips.hearstapps.com/hmg-prod/images/pretty-pink-plants-1554757430.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"/>
        
        <Segment position="center" style={{ marginBottom:"5%", width:"700px", marginLeft: "5.5%", marginTop:"-25.5%"}}>
          <br></br><center>
          <CreateProduct onSubmit={ (event) => { handleSubmit(event, this.state)}} />
           
            <Form.Button color="black" style={{width:"230px"}}  content='Submit' />
         
    </center>
      </Segment>
    </div>
    )
  
 }


const mapDispatchToProps = (dispatch) => {
  return { 
    createProduct: (product) =>  { dispatch(createProduct(product)) }, 
    checkUser: () =>  { dispatch(checkUser()) },
  }
}

export default connect(null, mapDispatchToProps)(CreateProductContainer)