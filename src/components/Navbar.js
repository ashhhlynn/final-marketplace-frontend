import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Header} from 'semantic-ui-react'

export default function NavBar() {
 
    return (
        <div className="container">                    
        <Menu color='teal' pointing secondary>
        <Header size='huge' background='teal' style={{marginTop: '2%'}}>
            MarketPlace
          </Header>
  
          <Menu.Menu position="right" >
          <Menu.Item size='huge'><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link>Log Out</Link></Menu.Item>
    </Menu.Menu> 
        </Menu>
    </div>
    );
  }
  