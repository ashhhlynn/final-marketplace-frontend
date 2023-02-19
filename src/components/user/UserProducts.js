import React, {Component} from 'react';
import { connect } from "react-redux";
import EditProduct from '../products/EditProduct'
import { Button, Modal } from 'semantic-ui-react'

class UserProducts extends Component {

    state = {
        up: [],
        modalOpen: false,

    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => this.setState({ modalOpen: false });

    componentDidMount() {
        let x = this.props.products.filter(p => p.buyer == this.props.user.id)
        this.setState ({
            up: x
        })
    }

    render () {
        const products = this.state.up.map( prod => {
            return (
                <li key={prod.id}>{prod.title}: ${prod.price} <br></br>
                <ul>{prod.description}<br></br>
                sold: {prod.sold}<br></br>
                <Button size="tiny" content="EDIT" onClick={this.handleOpen}></Button>
                <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                    <EditProduct product={prod} handleClose={this.handleClose}/>
                </Modal.Content>
                </Modal>
                </ul> 
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