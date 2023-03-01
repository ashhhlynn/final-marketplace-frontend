import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Header, Icon, Modal} from 'semantic-ui-react'
import ToggleLogin from './ToggleLogin'


class OtherNavbar extends Component {

    state = {
        modalOpen: false,
    };
  
 handleOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleClose = () => this.setState({ modalOpen: false });

  handleClick = () => {
    alert("Please log in")
  }

  render() {
    return (
      <div>
      <center>
      <img style={{ width:270, height:30, marginTop:"3%" }} src="https://cdn.shopify.com/s/files/1/1124/9666/files/leaf-and-clay-logo-new_196f33de-4679-4dc0-9e64-e6e9d9145052_200x@2x.png?v=1668367213"></img>
    </center>
      <Menu pointing secondary size="large"  style={{  marginTop: "-2%"}}>
        <Menu.Menu position="left" >
        <Menu.Item ><Link to='/' style={{  color: '#26453e'}}>
        <Header as="h3">HOME</Header>
        </Link></Menu.Item>
        <Menu.Item><Link to ="/products"  onClick={()=>{this.handleCreateOrder()}} style={{ color: '#26453e'}}>
    
        <Header as="h3">SHOP</Header>
          </Link></Menu.Item>         
        </Menu.Menu> 
      <Menu.Menu position = 'right'>
            <Menu.Item><Link style={{ color: 'grey'}} onClick={this.handleOpen}>
            <Icon name='user' style={{color:"#26453e"}} size="large"/></Link>Login</Menu.Item>
            <Modal centered style={{ display: "inline-block", width: "auto"}}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
            >
            <Modal.Content>
              <ToggleLogin handleClose={this.handleClose} />
            </Modal.Content>
            </Modal>


            </Menu.Menu>
      </Menu></div>
    )
  }
}

export default OtherNavbar