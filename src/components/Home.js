import React, { Component } from "react";
import {  Modal, Segment, Icon, Header, Divider, Item, Card, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';
import Product from './products/Product'
import Background from './Background'
import ToggleLogin from "./ToggleLogin";
import { Link } from 'react-router-dom'
import {createOrder} from './actions/orderActions'

class Home extends Component{
    state = {
        modalOpenTwo: false,
        modalOpen: false
      }
    
    
      handleOpen = () => {
        this.setState({ modalOpen: true });
      }
    
      handleClose = () => this.setState({ modalOpen: false });

      handleOpenTwo = () => {
        this.setState({ modalOpenTwo: true });
      }
    
      handleCloseTwo = () => this.setState({ modalOpenTwo: false });


handleStart = () => {

    if (this.props.user.length === 0 ) {
        this.handleOpenTwo()}
    else {
        this.handleCreateOrder()
        }
    }

    handleCreateOrder = () => {

        if (this.props.user.length !== 0 && this.props.currentOrder.length === 0) {
            let userId = this.props.user.id
            this.props.createOrder(userId)
        }
      }

    render() {   
        let p = this.props.products.slice(0,3)
        const products = p.map( i => {
            return (
                <Product product={i} key={i.id}/> 
            )
        })
            return (
           <div>
                <Background />
                <center>
                <Item style={{marginLeft:"0%", marginTop:"-25%", width:"600px", textAlign:"right", fontWeight:"normal"}}>
<Header as="h1" style={{color:"WHITE", fontSize:"42px"}}>Find Your Perfect Plant</Header>
<Button  style={{ width:"260px", marginRight:"25%"}} onClick={this.handleStart} size="huge">Get Started</Button>
                    </Item>
<br></br><br></br><br></br>
<br></br><br></br><br></br>
<br></br><br></br><br></br>

<br></br><br></br><br></br>

</center>



            
                    <img style={{marginTop: "3%", marginLeft:"7%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="550px" height="350px" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F08%2F04%2Fhouseplants-getty-0820.jpg&w=400&h=268&c=sc&poi=%5B709%2C373%5D&q=60"/>

                <Item style={{marginLeft:"55%", marginTop:"-27%", width:"450px", textAlign:"right", fontWeight:"normal"}}>
                <h1 style={{fontWeight: "normal", textAlign: "right", fontSize:"32px"}}>about us</h1><Divider></Divider>

                 <h3 style={{fontWeight:"normal", lineHeight:"1.8"}}>Planterina is a buy and sell plant market with a mission to inspire green places by connecting people with plants. We believe a strong relationship with plants will lead to greener and more sustainable lifestyles. Enjoy healthy, happy plants for you and your loved ones delivered straight to your door.
                 </h3>  <br></br><br></br><br></br><br></br>

 </Item>
 <Divider></Divider>
 <h1 style={{fontWeight:"normal", marginLeft:"11%", fontSize:"32px", textAlign:"left", marginTop:"3%"}}>new arrivals</h1> 
                 <Card.Group centered> {products} </Card.Group>
                 
           
                <center><br></br>
                <Button size="large" style={{width:"260px"}}> <Link to ="/products" style={{  color: '#26453e'}} onClick={this.handleCreateOrder}>Shop All</Link></Button>
<br></br><br></br>

<Segment style={{backgroundColor:"#f9f9f9"}}><br></br><br></br><br></br>
<Card.Group circular centered>
<Card style={{marginLeft:"2%", backgroundColor:"#f9f9f9", color:"#26453e",width:"290px"}}><br></br><br></br>
<center>
<Icon centered name="recycle" style={{color:"#fcc9b9"}} size="huge"></Icon>

<h2 style={{fontWeight:"normal"}}>Responsibly Sourced</h2>

<h4 style={{fontWeight:"normal"}}>Sustainably grown by people who care.</h4><br></br><br></br>
</center>
</Card>

<Card circular style={{fontWeight:"normal", backgroundColor:"#f9f9f9", color:"#26453e", width:"290px"}}><br></br><br></br>
<center>
<Icon centered name="bicycle" style={{color:"#fcc9b9"}} size="huge"></Icon>
<h2 style={{fontWeight:"normal"}}>Flat Delivery Fee</h2>
<h4 style={{fontWeight:"normal"}}>Enjoy flat rate delivery free of $7.00.</h4><br></br>
</center>
</Card>

<Card style={{width:"290px",  color:"#26453e", backgroundColor:"#f9f9f9" }}><br></br><br></br>
<center>
<Icon centered name="heart outline" style={{color:"#fcc9b9 ", }} size="huge"></Icon>
<h2 style={{fontWeight:"normal"}}>Rooted in Kindness</h2>
<h4 style={{fontWeight:"normal"}}>Kindness towards the people and planet.</h4><br></br>
</center>
</Card>             
</Card.Group>  
<br></br><br></br><br></br>   
</Segment>             
</center> 
              <br></br><br></br><br></br>
              <Modal centered style={{ display: "inline-block", width: "auto"}}
              open={this.state.modalOpenTwo}
              onClose={this.handleCloseTwo}
              closeIcon
              >
              <Modal.Content>
              <ToggleLogin handleClose={this.handleCloseTwo} />
              </Modal.Content>
              </Modal>


          
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
