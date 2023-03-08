import EditProduct from '../products/EditProduct'
import React, {Component} from 'react';
import { connect } from "react-redux";
import { Button, Header, Item, Modal, Divider, Icon} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';
import {deleteProduct} from '../actions/productActions'

class UserProduct extends Component {

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
handleDelete = (event, id) => {
    event.preventDefault()
    this.props.deleteProduct(id)
    this.props.checkUser()

  }
  render () {

    let prod= this.props.prod
        return (      
        <div>
            <Item style={{width:"570px", verticalAlign:"middle", marginLeft:"3%", display: "inline-block"}}>
            <Item.Header as="h3" style={{fontWeight:"normal", marginTop:"1%"}}>{prod.title}
            <Button size="tiny"  circular floated="right" onClick= { (event) => { this.handleDelete(event, prod.id)}}>
                Delete 
            </Button>
            <Button size="tiny" floated="right" circular onClick={this.handleOpen}>Update</Button>
            </Item.Header>
            {prod.buyer ?
                <p style={{marginTop:"-1.2%"}}>Sold to user {prod.buyer} on {prod.updated_at.slice(6, -14)}</p>
            : 
                <p style={{marginTop:"-1.2%"}}>Active</p>
            }     
            <Item.Image floated="left" rounded src={prod.image_url} size= "small" />
            Price:  ${prod.price.toFixed(2)}<br></br>
            Posted: {prod.created_at.slice(6, -14)}<br></br>
            Description: {prod.description} <br></br>
            </Item>
            <Divider></Divider>
            <Modal style={{ display: "inline-block", width: "600px"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content style={{ backgroundColor: "#fdfcf9 "}}>
                    <EditProduct product={prod} key={prod.id} handleClose={this.handleClose}/>
                </Modal.Content>
            </Modal>
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
      deleteProduct: (product) =>  { dispatch(deleteProduct(product)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProduct)