import React, { Component } from "react"
import { Item, Segment, Divider, Button, Icon, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import Background from './Background'
import About from './About'
import AboutCard from './AboutCard'
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
        return (
           <div className="home">
                <Background />
                <center>
                    <Item style={{marginTop:"-25%"}}> 
                        <h1 style={{color:"#FFFFFF"}}><b>Find Your Perfect Plant</b></h1>
                        <Button as={Link} to ="/products"  style={{ width:"260px"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Item>
                    <Segment style={{height: "250px", backgroundColor: "#F6E4D1", marginTop:"14%"}}>
                        <br></br>
                        <Header style={{fontSize:"50px", fontWeight:"normal"}}><i>Spring is Here!</i></Header>
                        <h2>shop plants <Icon name="arrow right"/> sell your creations <Icon name="arrow right"/> build community</h2>
                    </Segment>
                </center>
                <About />
                <div className="aboutTwo"><br></br><br></br><br></br>
                    <Item style={{height:"370px", marginLeft:"7%", marginTop:"0%", marginBottom: "7%", width:"450px"}}>
                        <br></br><h1> full bloom</h1>
                        <Divider></Divider>
                        <h3>It's officially spring and Peony season! Shop everyone’s favorite fluffy flower.</h3>
                        <Button as={Link} to ="/products" style={{ width:"180px"}} onClick={this.handleCreateOrder} size="huge">Shop Now</Button>
                        <img style={{marginTop: "-55%", marginLeft:"130%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="480px" height="350px" 
                        src="https://media.urbanstems.com/image/upload/f_auto/w_850,q_80/Catalogs/urbanstems-master/Spring23/Peony%20Palette/Peony_Palette_Middle.jpg" alt="abttwo"/>
                    </Item>
                </div>
                <AboutCard/>   
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
      createOrder: (userId) => { dispatch(createOrder(userId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
