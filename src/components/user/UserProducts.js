import React, { Component } from 'react'
import { connect } from "react-redux"
import { Item, Divider } from 'semantic-ui-react'
import { checkUser } from '../actions/userActions'
import UserProduct from './UserProduct'

class UserProducts extends Component {

    componentDidMount () {
        this.props.checkUser()
    }

    render () {
        const products = this.props.user.products.map( prod => {
            return ( <UserProduct prod={prod} key={prod.id} />
            )
        })
        return (
            <div className="profile">   
                <h2>Plant History<Divider></Divider></h2>
                {this.props.user.products.length !== 0 ?
                    <>
                    <Item.Group>
                        {products}   
                    </Item.Group> 
                    </>
                :
                    <>
                    <h5>You currently do not have any products.</h5>
                    </>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: () =>  { dispatch(checkUser()) }
    }
}

export default connect(null, mapDispatchToProps)(UserProducts)