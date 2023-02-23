import React, {Component} from 'react';
import { connect } from "react-redux";
import EditProduct from './EditProduct'
import { Button, Modal, Divider, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { checkUser } from '../actions/userActions';

class UserProducts extends Component {

    state = {
        modalOpen: false,
    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false });
        this.props.checkUser()
    }
      
    render () {
    const products = this.props.user.products.map( prod => {
        return (
            <li key={prod.title}>{prod.title} {prod.created_at.slice(6, -14)} <Button size="tiny" content="EDIT" onClick={this.handleOpen}></Button>
                <Modal style={{ display: "inline-block", width: "auto"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                    <EditProduct product={prod} key={prod.id} handleClose={this.handleClose}/>
                </Modal.Content>
                </Modal>
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

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: () =>  { dispatch(checkUser()) }
    }
  }

export default connect(null, mapDispatchToProps)(UserProducts)