import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { Menu, Icon, Modal, Dropdown } from 'semantic-ui-react'
import { logOut } from './actions/userActions'
import { connect } from "react-redux"
import { createOrder } from './actions/orderActions'
import ShoppingCartContainer from './cart/ShoppingCartContainer'
import ToggleLogin from './ToggleLogin'

class Navbar extends Component {

  state = {
    modalOpenCart: false,
    modalOpenLogin: false
  }

  handleOpenCart = () => {
    this.setState({ modalOpenCart: true });
  }

  handleCloseCart = () => {
    this.setState({ modalOpenCart: false })
  }

  handleOpenLogin = () => {
    this.setState({ modalOpenLogin: true });
  }

  handleCloseLogin = () => {
    this.setState({ modalOpenLogin: false });
  }

  handleLogout = () => {
    localStorage.clear()
    this.props.logOut()
    this.setState({ modalOpenLogin: false })
  }

  handleCreateOrder = () => {
    if (this.props.user.length !== 0 && this.props.currentOrder.length === 0) {
      let userId = this.props.user.id
      this.props.createOrder(userId)
    }
  }
  
  render() {
    return (                

      <div className="nav">
                <h1 style={{color:"#26453e", marginTop:"1.25%", marginBottom:"1.75%",fontFamily:"gadugi", fontSize:"34px", letterSpacing:'1.5px'}}>seedlink</h1>

        <Menu className="link-styles" pointing secondary size="large">

          <Menu.Item as={Link} to='/'><h3> home </h3></Menu.Item>
          <Menu.Item as={Link} to ="/createproduct" ><h3> sell </h3></Menu.Item>
          <Menu.Item as={Link} to ="/products" onClick={()=>{this.handleCreateOrder()}}><h3>shop</h3></Menu.Item>
          <Menu.Menu position='right'>
            <Modal style={{height:"550px", marginLeft:"60%" }}
              open={this.state.modalOpenCart}
              onClose={this.handleCloseCart}
              closeIcon>
              <Modal.Content>
                <ShoppingCartContainer handleClose={this.handleCloseCart} />
              </Modal.Content>
            </Modal>
            <Menu.Item onClick={this.handleOpenCart}><h3><Icon name='shopping basket' size="large"/></h3></Menu.Item>
            {this.props.user.length === 0 ? 
              <>
                <Menu.Item onClick={this.handleOpenLogin}><h3><Icon name='user circle' size="large"/></h3></Menu.Item>
                <Modal centered 
                  open={this.state.modalOpenLogin}
                  onClose={this.handleCloseLogin}
                  closeIcon>
                  <Modal.Content>
                    <ToggleLogin handleClose={this.handleCloseLogin}/>
                  </Modal.Content>
                </Modal>
              </>
            : 
              <>
                <Menu.Item >
                  <Link><h3><Icon name='user circle' size="large"/></h3></Link>
                  <Dropdown size="tiny">
                    <Dropdown.Menu>
                      <Dropdown.Item><Link to="/profile"><h3>Account</h3></Link></Dropdown.Item>
                      <Dropdown.Item><Link to="/" onClick={(e) => {this.handleLogout(e)}}><h3>Log Out</h3></Link></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </>
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