import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Icon, Modal, Dropdown} from 'semantic-ui-react'
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
        <img style={{ width:200, height:45, marginTop:"2%", marginBottom:"1.5%"}} src="https://cdn.shopify.com/s/files/1/0253/6701/9565/files/planterina-logo_432e9c62-d54e-4302-8761-6e169c222543_600x300.png?v=1628654999"></img>
        </center>
        <Menu pointing secondary size="large" style={{marginTop: "-3%", color: '#26453e'}}>
         <Link to='/' style={{  marginLeft:"1%", color: '#26453e'}}><h3> home </h3></Link>
         <Link to ="/createproduct" style={{ marginLeft:"2%", color: '#26453e'}}><h3> sell </h3></Link>
        <Link to ="/products" onClick={()=>{this.handleCreateOrder()}} style={{  marginLeft:"2%", color: '#26453e'}}><h3 style={{  color: '#26453e'}}>shop</h3></Link>
        <Menu.Menu position = 'right'>
        <Modal style={{height:"550px", width:"300px", marginLeft:"60%" }}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                  <ShoppingCartContainer handleClose={this.handleClose} />
                </Modal.Content>
        </Modal>
        <Link onClick={this.handleOpen}> <Icon name='shopping basket' style={{ marginLeft:"-60%",color:"#26453e"}} size="large"/></Link>
        
        {this.props.user.length === 0 ? 
          <div>
            <Link style={{ color: 'grey'}} onClick={this.handleOpenTwo}>
              <Icon name='user circle' style={{color:"#26453e"}} size="large"/>
            </Link>
            <Modal centered 
              open={this.state.modalOpenTwo}
              onClose={this.handleCloseTwo}
              closeIcon
              >
              <Modal.Content >
              <ToggleLogin handleClose={this.handleCloseTwo} />
              </Modal.Content>
            </Modal>
            </div>
          : 
          <div>
            <Icon name='user circle' style={{marginRight:"-20%", color:"#26453e"}}  size="large"/>
              <Dropdown size="tiny" style={{color:"#26453e"}}><Dropdown.Menu>
              <Dropdown.Item><Link to="/profile" style={{ color: 'grey'}}>Account</Link></Dropdown.Item>
              <Dropdown.Item><Link to="/" style={{ color: 'grey'}} onClick={(e) => {this.handleLogout(e)}}>Log Out</Link></Dropdown.Item>
              </Dropdown.Menu></Dropdown>
              </div>
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