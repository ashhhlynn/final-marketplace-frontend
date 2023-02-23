import React, {Component} from 'react';
import { connect } from "react-redux";
import EditProduct from './EditProduct'
import { Button, Modal, Divider, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { checkUser } from '../actions/userActions';

class UserProducts extends Component {

    state = {
        modalOpen: false,
        modalTwoOpen: false,
    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false });
        this.props.checkUser()
    }
      
    handleOpenTwo = () => {
        this.setState({ modalTwoOpen: true });
    }

    handleCloseTwo = () => {
        this.setState({ modalTwoOpen: false });
    }

    render () {
    const products = this.props.user.products.map( prod => {
        return (
            <li key={prod.title}><Link onClick={this.handleOpenTwo}>{prod.title}: ${prod.price}                  </Link>
                <Modal style={{ display: "inline-block", width: "auto"}}
                open={this.state.modalTwoOpen}
                onClose={this.handleCloseTwo}
                closeIcon
                >
                <Modal.Content>
                <Segment placeholder centered style={{ width:"600px"}}>   
                       <h2><i><center>{prod.title}</center></i></h2>
                       <Divider></Divider>
                       <p>Price: ${prod.price}</p>
                       <p>{prod.description}</p>
                       <p>Sold: No</p>
                   <center> <img style={{width:"310px", height:"250px"}} src={prod.image_url}></img></center>
                </Segment>
                </Modal.Content>
                </Modal>
                <Button size="tiny" content="EDIT" onClick={this.handleOpen}></Button>
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