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
        <center><img style={{ width:200, height:45, marginTop:"2%", marginBottom:"1.5%"}} src="https://cdn.shopify.com/s/files/1/0253/6701/9565/files/planterina-logo_432e9c62-d54e-4302-8761-6e169c222543_600x300.png?v=1628654999"></img></center>
        <Menu className="link-styles" pointing secondary size="large" style={{marginTop: "-4%"}}>
         <Menu.Item><Link  to='/'><h3> home </h3></Link></Menu.Item>
         <Menu.Item> <Link to ="/createproduct" ><h3> sell </h3></Link></Menu.Item>
         <Menu.Item><Link to ="/products" onClick={()=>{this.handleCreateOrder()}} ><h3 >shop</h3></Link></Menu.Item>
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
            <Menu.Item><Link onClick={this.handleOpen}> <h3><Icon name='shopping basket' size="large"/></h3></Link>
            </Menu.Item>
            {this.props.user.length === 0 ? 
              <div>
                <Menu.Item><Link onClick={this.handleOpenTwo}>
                  <h3><Icon name='user circle' size="large"/></h3>  
                </Link></Menu.Item>
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
                <Menu.Item ><Link>
                  <h3><Icon name='user circle' size="large"/></h3>  </Link>
                  <Dropdown size="tiny"><Dropdown.Menu>
                  <Dropdown.Item><Link to="/profile" ><h3>Account</h3></Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/" onClick={(e) => {this.handleLogout(e)}}><h3>Log Out</h3></Link></Dropdown.Item>
                  </Dropdown.Menu></Dropdown>
                </Menu.Item>
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