import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Button, Icon } from 'semantic-ui-react'

const ShoppingLinks = () => {
    return (
        <center>
            <Menu color="grey" inverted size="tiny">
                <Menu.Item color="teal"><Link to="/products" color="teal"><h4>
                Shop Products</h4></Link></Menu.Item>

        <Menu.Item position = 'right'>
        <Link to="/cart">
            <Button animated='vertical' position='right' size='medium' color="teal">
            <Button.Content hidden>Cart</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button></Link></Menu.Item>
          </Menu>
             </center> 
    )
}
    
export default ShoppingLinks