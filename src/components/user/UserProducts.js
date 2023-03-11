import React, {Component} from 'react';
import { connect } from "react-redux";
import { Item, Divider } from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';
import UserProduct from './UserProduct'

class UserProducts extends Component {

    render () {
        const products = this.props.user.products.map( prod => {
            return ( < UserProduct prod={prod} key={prod.id} />
            )
        })
        return (
            <div className="profile">   
                <h2>plant history<Divider></Divider></h2>
                {this.props.user.products.length !== 0 ?
                <>
                    <Item.Group >
                        {products}   
                    </Item.Group> 
                </>
                :
                <>
                    <h5><center>You currently do not have any active products.</center></h5>
                </>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: () =>  { dispatch(checkUser()) },
    }
}

export default connect(null, mapDispatchToProps)(UserProducts)