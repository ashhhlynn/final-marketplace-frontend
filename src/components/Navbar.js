import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Header, Icon, Modal, Dropdown} from 'semantic-ui-react'
import { logOut } from './actions/userActions'
import { connect } from "react-redux"
import {createOrder} from './actions/orderActions'
import ShoppingCartContainer from './cart/ShoppingCartContainer'
import ToggleLogin from './ToggleLogin'

class Navbar extends Component {

  state = {
    modalOpen: false,
    modalOpenTwo: false
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleClose = () => {
    this.setState({ modalOpen: false })
  }

  handleOpenTwo = () => {
    this.setState({ modalOpenTwo: true });
  }

  handleCloseTwo = () => this.setState({ modalOpenTwo: false });

    handleLogout = () => {
      localStorage.clear()
      this.props.logOut()
      this.setState({ modalOpenTwo: false })
    }

  handleCreateOrder = () => {
    if (this.props.user.length !== 0 && this.props.currentOrder.length === 0) {
      let userId = this.props.user.id
      this.props.createOrder(userId)
    }
  }
  
  render() {
    return (
      <div>
        <center>
        <img style={{ width:200, height:45, marginTop:"2%" }} src="https://cdn.shopify.com/s/files/1/0253/6701/9565/files/planterina-logo_432e9c62-d54e-4302-8761-6e169c222543_600x300.png?v=1628654999"></img>
        </center>
        <Menu pointing secondary size="large" style={{marginTop: "-3%"}}>
        <Menu.Menu position="left">
          <Menu.Item ><Link to='/' style={{  color: '#26453e'}}><h3 style={{ fontWeight:"normal", color: '#26453e'}}>home</h3></Link>
          </Menu.Item>
          <Menu.Item><Link to ="/createproduct" style={{ fontWeight:"normal", color: '#26453e'}}> <h3 style={{ fontWeight:"normal", color: '#26453e'}}>sell</h3></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to ="/products" onClick={()=>{this.handleCreateOrder()}} style={{ color: '#26453e'}}><h3 style={{ fontWeight:"normal", color: '#26453e'}}>shop</h3></Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position = 'right'>
        <Modal style={{ display: "inline-block", width: "380px", height:"580px", marginLeft: "67%"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                  <ShoppingCartContainer handleClose={this.handleClose} />
                </Modal.Content>
        </Modal>
        <Menu.Item><Link onClick={this.handleOpen}> <Icon name='shopping basket' style={{color:"#26453e"}} size="large"/></Link>
        </Menu.Item>
        {this.props.user.length === 0 ? 
          <div>
            <Menu.Item><Link style={{ color: 'grey'}} onClick={this.handleOpenTwo}>
              <Icon name='user circle' style={{color:"#26453e"}} size="large"/>
            </Link></Menu.Item>
            <Modal centered style={{ backgroundColor: "green", display: "inline-block", width: "auto"}}
              open={this.state.modalOpenTwo}
              onClose={this.handleCloseTwo}
              closeIcon
              >
              <Modal.Content style={{ backgroundColor: "#fdfcf9"}}>
              <ToggleLogin handleClose={this.handleCloseTwo} />
              </Modal.Content>
            </Modal>
            </div>
          : 
            <Menu.Item><Icon name='user circle' style={{marginLeft:"-15%", color:"#26453e"}}  size="large"/>
              <Dropdown size="tiny" style={{marginLeft:"-25%", color:"#26453e"}}><Dropdown.Menu>
              <Dropdown.Item><Link to="/profile" style={{ color: 'grey'}}>Account</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/" style={{ color: 'grey'}} onClick={(e) => {this.handleLogout(e)}}>Log Out</Link></Dropdown.Item>
              </Dropdown.Menu></Dropdown>
            </Menu.Item>
          }
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