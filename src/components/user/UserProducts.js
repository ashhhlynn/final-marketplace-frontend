import React, {Component} from 'react';
import { connect } from "react-redux";
import EditProduct from '../products/EditProduct'
import { Button } from 'semantic-ui-react'

class UserProducts extends Component {

    state = {
        up: []
    }

    componentDidMount(){
        let x = this.props.products.filter(p => p.buyer == this.props.user.id)
        this.setState ({
            up: x
        })
    }

    render () {
        const products = this.state.up.map( prod => {
            return (
                <li key={prod.id}>{prod.title}: ${prod.price} <br></br>
                {prod.description}
                sold: {prod.sold}
                <Button size="tiny" content="EDIT"></Button>
                <EditProduct product={prod}/> 
                </li>
            )
        })
        return (
            <div>             
                {products}         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(UserProducts)