import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'
import { Segment, Button, Divider, Header, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AccountNav extends Component {

    state = {
        modalOpen: false,
        activeItem: '' 
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {     
        const { activeItem } = this.state 
        return (
           <div>
               <Menu style={{fontFamily:"Lato", color:"#f3f3f2", height:"510px", background: "#f3f3f2"}} placeholder vertical size="big"><br></br>
                    <center><Header as="h1"><i>Hello, {this.props.user.name}</i></Header></center><br></br>
                   <Menu.Item 
                        name='Your Account'
                        active={activeItem === 'youraccount'}
                        onClick={this.handleItemClick}> 
                        <Link style={{ textAlign:"right", color: "#26453e"}}to ="/profile">Your Account</Link>
                    </Menu.Item>
                   <Menu.Item
                        name='your orders'
                        active={activeItem === 'yourorders'}
                        onClick={this.handleItemClick}>
                        <Link style={{  color: "#26453e"}} to ="/userorders"><b>Your Orders</b></Link>  
                    </Menu.Item>
                    <Menu.Item
                        name='your products'
                        active={activeItem === 'yourproducts'}
                        onClick={this.handleItemClick}>
                    <Link style={{  color: "#26453e"}} to ="/userproducts"><b>Your Products</b></Link>
                    </Menu.Item>
                    <Menu.Item> 
                    </Menu.Item>
                </Menu>         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect (mapStateToProps)(AccountNav)