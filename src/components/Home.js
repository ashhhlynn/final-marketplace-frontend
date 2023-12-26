import React, { Component } from "react"
import { Item, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Background from './Background'
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
                    <Item className="homeHeader" style={{marginBottom: "18%"}}> 
                        <h1><b>A Plant Marketplace</b></h1>
                        <h2><i>give your perfect plant a home</i></h2>
                        <Button inverted circular as={Link} to ="/products" style={{ color:"#545454", background: "#DBE6E0"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Item>   
                </center>  
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
