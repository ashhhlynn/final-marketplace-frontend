import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from '../reducers/AccountInfo'
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
               <Menu style={{fontFamily:"TimesNow-ExtraLight", textAlign:"right", color:"#f3f3f2", height:"510px", background: "#f3f3f2"}} placeholder vertical size="big"><br></br>
                   <Header as="h1"><i>Hello, {this.props.user.name}</i></Header><br></br>
                   <Menu.Item 
                        name='Your Account'
                        active={activeItem === 'youraccount'}
                        onClick={this.handleItemClick}> 
                        <Link style={{ color: "#26453e"}}to ="/profile">Your Account</Link>
                    </Menu.Item>
                   <Menu.Item
                        name='your orders'
                        active={activeItem === 'yourorders'}
                        onClick={this.handleItemClick}>
                        <Link style={{  color: "#26453e"}} to ="/userorders">Your Orders</Link>  
                    </Menu.Item>
                    <Menu.Item
                        name='your products'
                        active={activeItem === 'yourproducts'}
                        onClick={this.handleItemClick}>
                    <Link style={{  color: "#26453e"}} to ="/userproducts">Your Products</Link>
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