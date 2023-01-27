import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const ShoppingLinks = () => {
    return (
        <div className="container"><br></br>
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