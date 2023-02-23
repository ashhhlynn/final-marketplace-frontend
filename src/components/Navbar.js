import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Button, Icon, Modal} from 'semantic-ui-react'
import { logOut } from './actions/userActions'
import { connect } from "react-redux"
import {createOrder} from './actions/orderActions'
import ShoppingCartContainer from './cart/ShoppingCartContainer'

class Navbar extends Component {

  state = {
    modalOpen: false
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

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
            <Link><Button onClick={this.handleOpen} animated='vertical' position='right' size='medium'>
              <Button.Content hidden>Cart</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button></Link>
            <Modal style={{ display: "inline-block", width: "auto"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                  <ShoppingCartContainer handleClose={this.handleClose} />
                </Modal.Content>
            </Modal>
          </Menu.Item>
        </Menu.Menu> 
        <Menu.Item position = 'right' style={{marginTop: "1%"}}>
          <Menu.Item size='huge'><Link to="/" style={{ color: 'grey'}}><h4>About</h4></Link></Menu.Item>
          <Menu.Item size='huge'><Link to="/profile" style={{ color: 'grey'}}><h4>Account</h4></Link></Menu.Item>
          <Menu.Item><Link to ="/createproduct" style={{ color: 'grey'}}><h4>Sell Product</h4></Link></Menu.Item>
          <Menu.Item onClick={(e) => {this.handleLogout(e)}}>
            <Link to="/" style={{ color: 'grey'}}><h4>Log Out</h4></Link>
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