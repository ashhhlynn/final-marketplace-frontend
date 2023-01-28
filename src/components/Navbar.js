import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Header} from 'semantic-ui-react'

const Navbar = () => {
  return (
    <Menu color='teal' pointing secondary>
        <Header size='large' color='teal' style={{marginTop: '2%'}}>
          <b><i>Marketplace Crafts</i></b>
        </Header>
          <Menu.Menu position="right" >
            <Menu.Item size='huge'><Link to="/">Home</Link></Menu.Item>
            <Menu.Item><Link>Log Out</Link></Menu.Item>
        </Menu.Menu> 
    </Menu>
  )
}

export default Navbar