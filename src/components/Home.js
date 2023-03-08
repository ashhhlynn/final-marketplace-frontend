import React, { Component } from "react";
import {   Segment, Icon, Header, Divider, Item, Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import Product from './products/Product'
import Background from './Background'
import { Link } from 'react-router-dom'
import {createOrder} from './actions/orderActions'

class Home extends Component{

    handleCreateOrder = () => {
        if (this.props.user.length !== 0 && this.props.currentOrder.length === 0) {
            let userId = this.props.user.id
            this.props.createOrder(userId)
        }
        else if (this.props.user.length === 0){
            alert("Login or register to start ordering!")
        }
      }

    render() {   
        let p = this.props.products.slice(0,4)
        const products = p.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
        return (
           <div>
            <Background />
            <center><Item style={{marginTop:"-25%", width:"600px"}}>
                <h1 style={{color:"WHITE", fontSize:"44px"}}>Make Nature Home</h1>
                <Link to ="/products">
                    <Button style={{ width:"260px", marginRight:"0%"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Link>
            </Item></center>
            <img style={{marginTop: "19%", marginLeft:"7%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="550px" height="350px" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F08%2F04%2Fhouseplants-getty-0820.jpg&w=400&h=268&c=sc&poi=%5B709%2C373%5D&q=60"/>
            <Item style={{marginLeft:"55%", marginTop:"-27%", width:"450px", textAlign:"right"}}>
                <h1 style={{textAlign: "right", fontSize:"32px"}}>about us</h1>
                <Divider></Divider>
                <h3 style={{lineHeight:"1.8"}}>
                    Planterina is a buy and sell plant market with a mission to inspire green places by connecting people with plants. We believe a strong relationship with plants will lead to greener and more sustainable lifestyles. Enjoy healthy, happy plants for you and your loved ones delivered straight to your door.
                </h3>
            </Item><br></br><br></br><br></br><br></br><br></br>
            <Divider></Divider>
            <h1 style={{marginLeft:"3.5%", fontSize:"32px", textAlign:"left", marginTop:"3%"}}>new arrivals</h1> 
            <Card.Group centered> {products} </Card.Group>          
            <center><br></br>
            <Button size="large" style={{width:"260px", marginBottom:"2%"}}> <Link to ="/products" style={{  color: '#26453e'}} onClick={this.handleCreateOrder}>Shop All</Link></Button>
           
            <Segment style={{marginTop: "2%", backgroundColor:"#f9f9f9"}}>
                <Card.Group  centered>
                <Card style={{marginLeft:"2%", backgroundColor:"#f9f9f9", color:"#26453e",width:"290px"}}><br></br><br></br>
                <center>
                    <Icon centered name="recycle" style={{color:"#26453e"}} size="huge"></Icon>
                    <h2>Responsibly Sourced</h2>
                    <h4 >Sustainably grown by people who care.</h4><br></br><br></br>
                </center>
                </Card>
                <Card circular style={{backgroundColor:"#f9f9f9", color:"#26453e", width:"290px"}}><br></br><br></br>
                <center>
                <Icon centered name="bicycle" style={{color:"#26453e"}} size="huge"></Icon>
                <h2 >Flat Delivery Fee</h2>
                <h4 >Enjoy flat rate delivery fee of $10.00.</h4><br></br>
                </center>
                </Card>
                <Card style={{width:"290px",  color:"#26453e", backgroundColor:"#f9f9f9" }}><br></br><br></br>
                <center>
                <Icon centered name="heart outline" style={{color:"##26453e" }} size="huge"></Icon>
                <h2 >Rooted in Kindness</h2>
                <h4>Kindness towards the people and planet.</h4><br></br>
                </center>
                </Card>             
            </Card.Group>  
        </Segment>             
        </center>  
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        products: state.products,
        user: state.currentUser,
        currentOrder: state.currentOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      createOrder: (userId) => { dispatch(createOrder(userId)) }, 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
