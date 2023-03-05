import React, {Component} from 'react';
import { connect } from "react-redux";
import { Button, Header, Item, Modal, Divider, Icon} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';
import {deleteProduct} from '../actions/productActions'
import UserProduct from './UserProduct'

class UserProducts extends Component {

    render () {
        const products = this.props.user.products.map( prod => {
            return ( < UserProduct prod={prod} key={prod.id} />
        )
    })
        return (
                    <div>   
                        <Header as="h2">Active Items</Header> 
                        <Divider></Divider>
                        <Item.Group >
                            {products}   
                        </Item.Group> <br></br>
                       
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: () =>  { dispatch(checkUser()) },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts)