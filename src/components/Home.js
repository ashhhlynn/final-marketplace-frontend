import React, { Component } from "react";
import {  Modal, Icon, Header, Divider, Item, Card, Button} from 'semantic-ui-react'
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
        this.handleOpen()
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
                <Item style={{marginLeft:"0%", marginTop:"-26%", width:"600px", textAlign:"right", fontWeight:"normal"}}>
<Header as="h1" style={{color:"WHITE", fontSize:"42px"}}>Find Plant To Love</Header>
<Button circular style={{ width:"300px", marginRight:"25%", fontWeight:"normal"}} onClick={this.handleStart} size="huge">GET STARTED</Button>
                    </Item>
<br></br><br></br><br></br>
<br></br><br></br><br></br>
<br></br><br></br><br></br>

<br></br><br></br><br></br>

</center>
<Header as="h1" style={{marginLeft:"11%", fontSize:"38px", textAlign:"left", marginTop:"0%"}}><i>New Arrivals</i> <br></br>
<Button size="small"> <Link to ="/products" style={{  color: '#26453e'}} onClick={this.handleCreateOrder}>Shop all</Link></Button></Header>
                 <Card.Group centered> {products} </Card.Group>
                 
                 <Divider></Divider>


            
                    <img style={{marginTop: "3%", marginLeft:"7%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="550px" height="350px" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F08%2F04%2Fhouseplants-getty-0820.jpg&w=400&h=268&c=sc&poi=%5B709%2C373%5D&q=60"/>

                <Item style={{marginLeft:"55%", marginTop:"-27%", width:"450px", textAlign:"right", fontWeight:"normal"}}>
                <Header style={{textAlign: "right", fontSize:"38px"}}><i>About Us</i></Header><Divider></Divider>

                 <h3 style={{fontWeight:"normal", lineHeight:"1.8"}}>Planterina is a buy and sell online plant market with a mission to inspire green places by connecting people with plants. We believe a strong relationship with plants will lead to greener and more sustainable lifestyles. Enjoy healthy, happy plants for you and your loved ones delivered straight to your door.
                 </h3>  <br></br><br></br><br></br><br></br>
 </Item>
 <Divider></Divider>
                <center>
<br></br>
<Card.Group centered>
<Card style={{width:"250px"}}><br></br>
<center>
<Icon centered name="leaf" size="huge"></Icon>

<h2>RESPONSIBLY SOURCED</h2>

<h3>Sustainably grown by people who care.</h3><br></br>
</center>
</Card>

<Card style={{fontWeight:"normal", width:"250px"}}><br></br>
<center>
<Icon centered name="truck" size="huge"></Icon>
<h2>FLAT RATE DELIVERY FEE</h2>
<h3>Enjoy flat rate delivery free of 7.00.</h3><br></br>
</center>
</Card>

<Card style={{width:"250px"}}><br></br>
<center>
<Icon centered name="heart outline" size="huge"></Icon>
<h2>ROOTED IN KINDNESS</h2>

<h3>Kindness towards the people, planet, and partners.</h3><br></br>
</center>
</Card>             
</Card.Group>                  
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


              <Modal centered style={{ display: "inline-block", width: "500px", height:"150px"}}
              open={this.state.modalOpen}
              onClose={this.handleClose}
              closeIcon
              >
                  <Modal.Header><center>Would you like to sell or shop products?</center></Modal.Header>
              <Modal.Content>
              <center>
              <Button size="huge"><Link to ="/createproduct" style={{  color: '#26453e'}}> <Header as="h3">SELL</Header>
            </Link> </Button> 

            <Button size="huge"><Link to ="/products" onClick={this.handleCreateOrder} style={{  color: '#26453e'}}> <Header as="h3">SHOP</Header>
            </Link> </Button>
            </center>
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
