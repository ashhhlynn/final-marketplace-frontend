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
            <div className="profile">   
                <h2>your plants <Divider></Divider></h2></div>
                {this.props.user.products.length !== 0 ?
                <div>
                    <Item.Group >
                        {products}   
                    </Item.Group> 
                </div>
                :
                    <h5>You currently do not have any active products.</h5>
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