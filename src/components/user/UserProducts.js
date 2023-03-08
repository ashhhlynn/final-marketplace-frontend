import React, {Component} from 'react';
import { connect } from "react-redux";
import { Button, Header, Item, Modal, Divider, Icon} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';
import UserProduct from './UserProduct'

class UserProducts extends Component {

    render () {
        const products = this.props.user.products.map( prod => {
            return ( < UserProduct prod={prod} key={prod.id} />
        )
        })
        return (
            <div>   
                <h2><center>your plants</center><Divider></Divider></h2>
                {this.props.user.products.length !== 0 ?
                <>
                    <Item.Group >
                        {products}   
                    </Item.Group> 
                </>
                :
                    <center>You currently do not have any active products.</center>
                }
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