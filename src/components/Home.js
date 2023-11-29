import React, { Component } from "react"
import { Item, Divider, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Background from './Background'
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'
import { createOrder } from './actions/orderActions'

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
                    <Item className="homeHeader" style={{marginBottom: "23.5%"}}> 
                        <h1><b>A Plant Marketplace</b></h1>
                        <h2><i>give your perfect plant a home</i></h2>
                        <Button inverted circular as={Link} to ="/products" style={{ color:"#686868", background: "#DBE6E0"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Item>   
                </center>  
                    <div className="aboutTwo">
                        <br></br><br></br><h1>seedlink</h1>
                        <Divider></Divider>
                        <h3> Seedlink is a buy and sell marketplace for plants with a mission to connect plant lovers and inspire sustainable lifestyles. Sell your own creations, or enjoy plants delivered straight to your door!</h3>
                        <Button as={Link} to ="/products" style={{ color:"white", backgroundColor:"black", width:"180px"}} onClick={this.handleCreateOrder} size="huge">Shop Now</Button>
                        <img style={{marginTop: "-78.3%", marginLeft:"107%", marginBottom: "-1%",  objectFit: "cover", objectPosition: "30% 90%"}} floated="left" width="680px" height="445px" src="https://i0.wp.com/www.redwinedragons.com/wp-content/uploads/2022/04/easy-care-best-beautiful-indoor-house-plants-decor.png?w=800&ssl=1" alt="about" />
                    </div>
                <AboutCard/>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.currentUser,
        currentOrder: state.currentOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      createOrder: (userId) => { dispatch(createOrder(userId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
