import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const ShoppingLinks = () => {
    return(
    <div><br></br>
    <center>
        <Menu>
            <Menu.Item><Link to="/products">Products</Link></Menu.Item>
            <Menu.Item><Link to="/cart">Cart </Link></Menu.Item>
        </Menu>
    </center>
    </div>     
    )
}
    
export default ShoppingLinks