import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Button, Icon} from 'semantic-ui-react'
import { logOut } from './actions/userActions'
import { connect } from "react-redux"
import {createOrder} from './actions/orderActions'

class Navbar extends Component {

    handleLogout(e){
      e.preventDefault()
      localStorage.clear()
      this.props.logOut()
    }

  handleCreateOrder() {
    if (this.props.currentOrder.length === 0) {
        let userId = this.props.user.id
        this.props.createOrder(userId)
    }
  }
  
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Menu position="left" >
          <Menu.Item>
            <Link to="/products"><Button size='tiny' onClick={()=>{this.handleCreateOrder()}}>
              <h4>Shop</h4>
            </Button></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/cart"><Button animated='vertical' position='right' size='medium'>
              <Button.Content hidden>Cart</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button></Link>
          </Menu.Item>
        </Menu.Menu> 
        <Menu.Item position = 'right'>
          <Menu.Item size='huge'><Link to="/" style={{ color: 'grey'}}><h3>About</h3></Link></Menu.Item>
          <Menu.Item size='huge'><Link to="/profile" style={{ color: 'grey'}}><h3>Account</h3></Link></Menu.Item>
          <Menu.Item><Link to ="/createproduct" style={{ color: 'grey'}}><h3>Sell</h3></Link></Menu.Item>
          <Menu.Item onClick={(e) => {this.handleLogout(e)}}>
            <Link to="/" style={{ color: 'grey'}}><h3>Log Out</h3></Link>
          </Menu.Item>
        </Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.currentUser,
      currentOrder: state.currentOrder
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    logOut: () => { dispatch(logOut()) },
    createOrder: (userId) => { dispatch(createOrder(userId)) }, 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)