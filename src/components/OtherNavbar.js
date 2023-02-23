import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Button, Icon, Modal} from 'semantic-ui-react'
import ToggleLogin from './ToggleLogin'

class OtherNavbar extends Component {

    state = {
        modalOpen: false,
    };
  
 handleOpen = () => {
    this.setState({ modalOpen: true });
  }

  handleClose = () => this.setState({ modalOpen: false });

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
            <Menu.Item size='huge'><Link style={{ color: 'grey'}} onClick={this.handleOpen}><h3>Login</h3></Link></Menu.Item>
            <Modal style={{ width:"710px", height:"430px"}}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            closeIcon
            >
            <Modal.Content>
              <ToggleLogin handleClose={this.handleClose} />
            </Modal.Content>
            </Modal>
        </Menu.Item>
      </Menu>
    )
  }
}

export default OtherNavbar