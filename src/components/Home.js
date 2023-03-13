import React, { Component } from "react"
import { Item, Button} from 'semantic-ui-react'
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
                    <Item > 
                        <h1 color="white">Find Your Perfect Plant</h1>
                        <Button as={Link} to ="/products"  style={{ width:"260px"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Item>
                </center>
                <About />
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
