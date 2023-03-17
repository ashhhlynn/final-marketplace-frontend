import React, { Component } from "react"
import { Item, Divider, Button, } from 'semantic-ui-react'
import {connect} from 'react-redux'
import Background from './Background'
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
            alert("Register or login to begin order.")
        }
    }

    render() {   
        return (
           <div className="home">
                <Background />  
                <center>
                    <Item className="homeHeader"> 
                        <h1><b>A Plant Marketplace</b></h1>
                        <h2><i>for the true plant lovers</i></h2>
                        <Button inverted circular as={Link} to ="/products" style={{ color:"#686868", background: "#DBE6E0"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Item>    
                </center>
                <img style={{marginTop: "26%", marginLeft:"7%", objectFit: "cover", objectPosition: "0% 25%"}}floated="left" width="550px" height="350px" src="https://i0.wp.com/www.redwinedragons.com/wp-content/uploads/2022/04/easy-care-best-beautiful-indoor-house-plants-decor.png?w=800&ssl=1" alt="about"/>
                <Item className="about">
                    <h1>about</h1>
                    <Divider></Divider>
                    <h3>
                        Seedlink is a buy and sell plant market with a mission to inspire green places by connecting people with plants. Sell your creations or enjoy healthy, happy plants delivered straight to your door.
                    </h3>
                </Item>
                <Divider></Divider>
                <Item className="aboutTwo">
                    <br></br><h1>spring is here</h1>
                    <Divider></Divider>
                    <h3>It's officially Peony season! Kick off the new season by shopping everyone’s favorite fluffy flower.</h3>
                    <Button as={Link} to ="/products" style={{ width:"180px"}} onClick={this.handleCreateOrder} size="huge">Shop Now</Button>
                    <img style={{marginTop: "-55%", marginLeft:"130%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="480px" height="350px" 
                    src="https://media.urbanstems.com/image/upload/f_auto/w_850,q_80/Catalogs/urbanstems-master/Spring23/Peony%20Palette/Peony_Palette_Middle.jpg" alt="abttwo"/>
                </Item>
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
