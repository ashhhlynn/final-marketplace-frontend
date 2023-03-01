import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Button, Header, Icon, Modal, Dropdown, Divider} from 'semantic-ui-react'
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
      <div  >
        <center>
        <img style={{ width:270, height:30, marginTop:"3%" }} src="https://cdn.shopify.com/s/files/1/1124/9666/files/leaf-and-clay-logo-new_196f33de-4679-4dc0-9e64-e6e9d9145052_200x@2x.png?v=1668367213"></img>
        </center>
        <Menu pointing secondary size="large" style={{ marginTop: "-2%"}}>
        <Menu.Menu position="left">
          <Menu.Item ><Link to='/' style={{  color: '#26453e'}}>
            <Header as="h3">HOME</Header></Link></Menu.Item>
          <Menu.Item><Link to ="/createproduct" style={{  color: '#26453e'}}><Header as="h3">SELL</Header></Link></Menu.Item>
          <Menu.Item><Link to ="/products"  onClick={()=>{this.handleCreateOrder()}} style={{ color: '#26453e'}}><Header as="h3">SHOP</Header></Link></Menu.Item>
        </Menu.Menu>
        <Menu.Menu position = 'right'>
        <Modal style={{ display: "inline-block", width: "360px", height:"580px", marginLeft: "67%"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                  <ShoppingCartContainer handleClose={this.handleClose} />
                </Modal.Content>
        </Modal>
          <Menu.Item><Link onClick={this.handleOpen}> <Icon name='cart' style={{marginLeft:"0%", color:"#26453e"}} size="large"/></Link>
          </Menu.Item>
          <Menu.Item><Icon name='user' style={{marginLeft:"-15%", color:"#26453e"}}  size="large"/>
          <Dropdown size="tiny" style={{marginLeft:"-25%", color:"#26453e"}}>   
            <Dropdown.Menu>
              <Dropdown.Item>            
                <Link to="/profile" style={{ color: 'grey'}}>Account</Link>
              </Dropdown.Item>
              <Dropdown.Item >
                <Link to="/" style={{ color: 'grey'}} onClick={(e) => {this.handleLogout(e)}}>Log Out</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
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