import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function NavBar() {
 
    return (
        <div className="container">                    
        <Menu pointing secondary>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/products">Products</Link></Menu.Item>
        <Menu.Item><Link to="/cart">Cart</Link></Menu.Item>

          <Menu.Menu position="right" >
        <Menu.Item><Link>Log Out</Link></Menu.Item>
    </Menu.Menu> 
        </Menu>
    </div>
    );
  }
  